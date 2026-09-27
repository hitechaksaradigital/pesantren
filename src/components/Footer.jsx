import { LOGO_SRC } from '../images.js'

const QUICK_LINKS = [
  { label: 'Profil Singkat & Visi', href: '#profil-dan-visi' },
  { label: 'Program Marhalah Ula, Wustha, & Ulya', href: '#panduan-pendidikan' },
  { label: 'Formulir Pendaftaran PSB Online', href: '#/pendaftaran-psb-online' },
  { label: 'Rincian Biaya PSB 2025/2026', href: '#psb-registrasi' },
  { label: 'Jadwal Tes Seleksi Masuk', href: '#psb-registrasi' },
  { label: 'Pertanyaan Umum (FAQ)', href: '#kontak-dan-faq' },
]

const SERVICES = [
  { icon: 'shield_person', label: 'Portal Wali Santri (SIAKAD)', href: '#kontak-dan-faq' },
  { icon: 'event_available', label: 'Jadwal Menjenguk (Sambangan)', href: '#kontak-dan-faq' },
  { icon: 'account_balance_wallet', label: 'Pembayaran Virtual Account', href: '#psb-registrasi' },
  { icon: 'local_hospital', label: 'Pos Kesehatan Pesantren (Poskestren)', href: '#fasilitas' },
]

const SOCIALS = [
  { icon: 'smart_display', label: 'YouTube' },
  { icon: 'photo_camera', label: 'Instagram' },
  { icon: 'public', label: 'Facebook' },
  { icon: 'videocam', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface shadow-[0_-2px_12px_rgba(9,35,40,0.03)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Logo Pesantren Modern Darul Ulum Al-Hikmah"
                className="h-10 w-auto object-contain"
                src={LOGO_SRC}
              />
              <span className="font-title text-title text-primary">Darul Ulum Al-Hikmah</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Lembaga pendidikan Islam modern terpadu yang memadukan kurikulum salafiyah, tahfizhul Qur'an mutqin,
              serta kurikulum sains modern bertaraf internasional.
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="inline-flex items-center gap-2 font-label-sm text-label-sm text-secondary">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Terakreditasi A (Unggul) BAN-S/M
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                SK Kemenag RI: No. 492/Kw.13.2/PP.00.7/2021
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-headline-sm text-[16px] text-primary font-bold tracking-tight">Navigasi Cepat</h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-secondary transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-headline-sm text-[16px] text-primary font-bold tracking-tight">
              Layanan Santri &amp; Wali
            </h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              {SERVICES.map((service) => (
                <li key={service.label}>
                  <a className="hover:text-secondary transition-colors flex items-center gap-1.5" href={service.href}>
                    <span className="material-symbols-outlined text-[16px] text-secondary">{service.icon}</span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-headline-sm text-[16px] text-primary font-bold tracking-tight">Hubungi Kami</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Jl. Raya Pesantren No. 99, Jawa Timur, Indonesia
            </p>
            <div className="flex items-center gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-colors"
                  href="#beranda"
                >
                  <span className="material-symbols-outlined text-[18px]">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-secondary">
              <div className="flex items-center gap-2 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">map</span>
                <span>Kampus Utama (Google Maps)</span>
              </div>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-container-high/60 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Pesantren Modern Darul Ulum Al-Hikmah. Seluruh Hak Cipta Dilindungi.
          </p>
          <p className="font-label-sm text-label-sm text-secondary">
            Terakreditasi BAN-S/M &amp; Kementerian Agama Republik Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}

