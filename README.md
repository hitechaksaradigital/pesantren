# Pesantren Modern Darul Ulum Al-Hikmah

Website profil & pendaftaran PSB online, diimplementasikan dengan **React 18 + Vite 5 + Tailwind CSS 3** berdasarkan desain di `design/pesantren_modern_darul_ulum_al_hikmah_profil_pendaftaran_psb_online/code.html`.

## Menjalankan

```bash
npm install
npm run dev      # development server
npm run build    # production build ke dist/
npm run preview  # preview hasil build
```

## Struktur

- `src/App.jsx` — komposisi halaman (single page)
- `src/components/` — Header, Hero, Philosophy, Curriculum, Facilities, Admission, Achievements, Leadership, FaqContact, FloatingChat, Footer
- `src/data/` — konten repetitif (tier kurikulum, jadwal, biaya, FAQ, testimoni, prestasi)
- `src/images.js` — URL aset gambar dari desain
- `tailwind.config.js` — token desain (warna, tipografi, spacing) disalin persis dari desain asli

## Catatan

- Navigasi `data-path` pada desain dipetakan ke anchor dalam halaman (`#beranda`, `#profil-dan-visi`, `#panduan-pendidikan`, `#fasilitas`, `#psb-registrasi`, `#prestasi`, `#kontak-dan-faq`) dengan scroll-spy aktif di header.
- Header tingginya 120px (topbar 40px + navbar 80px), setiap section diberi `scroll-mt-[120px]` agar anchor tidak tertutup header.
- Font (Inter, Plus Jakarta Sans, Material Symbols) dimuat dari Google Fonts seperti desain asli.
