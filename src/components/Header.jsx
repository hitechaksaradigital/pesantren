import { useEffect, useState } from 'react'
import { LOGO_SRC } from '../images.js'

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'profil-dan-visi', label: 'Profil & Visi' },
  { id: 'panduan-pendidikan', label: 'Program & Kurikulum' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'psb-registrasi', label: 'Alur PSB' },
  { id: 'prestasi', label: 'Prestasi' },
  { id: 'kontak-dan-faq', label: 'Kontak & FAQ' },
]

export default function Header() {
  const [active, setActive] = useState('beranda')

  useEffect(() => {
    const onScroll = () => {
      let current = NAV_ITEMS[0].id
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= 160) current = item.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_2px_12px_rgba(9,35,40,0.06)]">
      <div className="bg-primary-container text-on-primary-container border-b border-primary-container/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-lg">
            <span className="flex items-center gap-1.5 text-on-primary-container">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">call</span>
              Hotline PSB: +62 812-3456-7890
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-on-primary-container">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">mail</span>
              info@darululum-alhikmah.sch.id
            </span>
            <span className="hidden xl:flex items-center gap-1.5 text-on-primary-container">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">location_on</span>
              Jl. Raya Pesantren No. 99, Jawa Timur
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-1.5 font-label-sm text-label-sm">
              <button className="text-surface-container-lowest font-bold hover:underline" type="button">
                ID
              </button>
              <span className="text-on-primary-container/40">|</span>
              <button
                className="text-on-primary-container hover:text-surface-container-lowest transition-colors"
                type="button"
              >
                EN
              </button>
              <span className="text-on-primary-container/40">|</span>
              <button
                className="text-on-primary-container hover:text-surface-container-lowest transition-colors"
                type="button"
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest/95 backdrop-blur-md">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
          <a href="#beranda" className="flex items-center gap-3.5">
            <img
              alt="Logo Pesantren Modern Darul Ulum Al-Hikmah"
              className="h-11 w-auto object-contain"
              src={LOGO_SRC}
            />
            <div className="flex flex-col">
              <span className="font-title text-title text-primary tracking-tight font-headline-sm">
                Darul Ulum Al-Hikmah
              </span>
              <span className="font-label-sm text-[11px] text-secondary tracking-wide uppercase">
                Mencetak Generasi Rabbani Berwawasan Global
              </span>
            </div>
          </a>
          <nav className="hidden xl:flex items-center gap-space-md lg:gap-space-lg">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    isActive
                      ? 'transition-colors text-secondary font-bold underline underline-offset-8 decoration-2 decoration-secondary'
                      : 'font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors'
                  }
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-label-md text-label-md text-secondary border border-secondary/20 hover:bg-secondary-container/40 transition-all"
              href="#psb-registrasi"
            >
              Brosur Digital
            </a>
            <a
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-primary transition-all shadow-[0_2px_8px_rgba(43,104,98,0.25)]"
              href="#psb-registrasi"
            >
              Daftar PSB Online
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
