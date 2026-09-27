export const DRAFT_KEY = 'psb-draft-v1'

export const INITIAL_FORM = {
  jenjang: 'MTs/SMP',
  jalur: 'reguler',
  metode: 'offline',
  namaLengkap: '',
  nisn: '',
  nik: '',
  gender: 'Laki-laki',
  tempatLahir: '',
  tanggalLahir: '',
  asalSekolah: '',
  hafalan: '0-1',
  namaAyah: '',
  namaIbu: '',
  whatsapp: '',
  pekerjaan: '',
  provinsi: '',
  kotaKab: '',
  alamat: '',
  persetujuan: false,
}

export const JENJANG_OPTIONS = [
  {
    value: 'MTs/SMP',
    icon: 'auto_stories',
    title: 'MTs / SMP Fullday & Boarding',
    desc: 'Pendidikan Menengah Pertama terintegrasi kurikulum nasional, tahfizh 5 juz, dan adab islami.',
    footer: 'Putra & Putri',
  },
  {
    value: 'MA/SMA',
    icon: 'biotech',
    title: "MA / SMA Sains & Al-Qur'an",
    desc: 'Unggulan riset olimpiade sains nasional, bilingual Arab-Inggris aktif, persiapan PTN ternama.',
    footer: 'Putra & Putri (Asrama)',
  },
  {
    value: 'Kuliyyatul Huffazh',
    icon: 'menu_book',
    title: 'Kuliyyatul Huffazh (Khusus 30 Juz)',
    desc: 'Program takhassus intensif tahfizh mutqin 30 juz bersanad, matan tajwid, dan kajian kitab turots.',
    footer: 'Seleksi Khusus',
  },
]
