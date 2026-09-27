-- =============================================================
-- Pesantren Modern Darul Ulum Al-Hikmah
-- Skema Database Pendaftaran PSB Online (Supabase / PostgreSQL)
--
-- Cara pakai:
--   1. Buka Supabase Dashboard -> project Anda -> SQL Editor
--   2. New query -> tempel seluruh isi file ini -> Run
--   3. Isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY di file .env
-- =============================================================

-- -------------------------------------------------------------
-- 1. Tabel utama: pendaftar PSB
-- -------------------------------------------------------------
create table if not exists public.pendaftaran_psb (
  id              uuid primary key default gen_random_uuid(),
  kode_pendaftar  text not null unique,
  created_at      timestamptz not null default now(),

  -- Bagian 1: pilihan program & jenjang
  jenjang         text not null check (jenjang in ('MTs/SMP', 'MA/SMA', 'Kuliyyatul Huffazh')),
  jalur           text not null check (jalur in ('reguler', 'mandiri', 'beasiswa')),
  metode_seleksi  text not null check (metode_seleksi in ('offline', 'online')),

  -- Bagian 2: data pribadi calon santri
  nama_lengkap    text not null,
  nisn            text not null check (char_length(nisn) = 10),
  nik             text not null check (char_length(nik) = 16),
  jenis_kelamin   text not null check (jenis_kelamin in ('Laki-laki', 'Perempuan')),
  tempat_lahir    text not null,
  tanggal_lahir   date not null,
  asal_sekolah    text not null,
  hafalan         text not null check (hafalan in ('0-1', '2-5', '6-15', '16-30')),

  -- Bagian 3: data orang tua / wali
  nama_ayah       text not null,
  nama_ibu        text not null,
  whatsapp        text not null,
  pekerjaan_wali  text not null,
  provinsi        text not null,
  kota_kabupaten  text not null,
  alamat          text not null,

  -- Bagian 4: nama berkas terpilih (opsional, berkas fisik diserahkan saat tes)
  berkas_opsional text,

  -- Status verifikasi oleh panitia
  status          text not null default 'menunggu'
                  check (status in ('menunggu', 'verifikasi', 'diterima', 'ditolak')),
  catatan_panitia text
);

-- Indeks untuk urutan daftar & filter jenjang
create index if not exists pendaftaran_psb_created_at_idx
  on public.pendaftaran_psb (created_at desc);
create index if not exists pendaftaran_psb_jenjang_idx
  on public.pendaftaran_psb (jenjang);

-- -------------------------------------------------------------
-- 2. Row Level Security
--    - Anon (pengunjung web) boleh INSERT (mendaftar) saja
--    - Tidak ada policy SELECT di tabel => data sensitif
--      (NIK, NISN, WhatsApp, alamat) tidak bisa dibaca publik
-- -------------------------------------------------------------
alter table public.pendaftaran_psb enable row level security;

drop policy if exists "anon_boleh_mendaftar" on public.pendaftaran_psb;
create policy "anon_boleh_mendaftar"
  on public.pendaftaran_psb
  for insert
  to anon, authenticated
  with check (true);

-- -------------------------------------------------------------
-- 3. Fungsi publik AMAN untuk daftar di halaman pendaftaran
--    (hanya kolom yang layak tampil; dijalankan dengan hak pemilik
--     sehingga bisa membaca tabel yang RLS-nya ketat.
--     Berkas/data sensitif seperti NIK, NISN, WhatsApp, alamat
--     TIDAK PERNAH dikembalikan fungsi ini.)
-- -------------------------------------------------------------
create or replace function public.get_daftar_pendaftar_psb(limit_count int default 50)
returns table (
  kode_pendaftar text,
  nama_lengkap text,
  jenjang text,
  kota_kabupaten text,
  provinsi text,
  status text,
  created_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    p.kode_pendaftar,
    p.nama_lengkap,
    p.jenjang,
    p.kota_kabupaten,
    p.provinsi,
    p.status,
    p.created_at
  from public.pendaftaran_psb p
  order by p.created_at desc
  limit greatest(1, least(coalesce(limit_count, 50), 100));
$$;

revoke all on function public.get_daftar_pendaftar_psb(int) from public;
grant execute on function public.get_daftar_pendaftar_psb(int) to anon, authenticated;
