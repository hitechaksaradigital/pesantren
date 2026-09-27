import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import Curriculum from './components/Curriculum.jsx'
import Facilities from './components/Facilities.jsx'
import Admission from './components/Admission.jsx'
import Achievements from './components/Achievements.jsx'
import Leadership from './components/Leadership.jsx'
import FaqContact from './components/FaqContact.jsx'
import FloatingChat from './components/FloatingChat.jsx'
import Footer from './components/Footer.jsx'
import PendaftaranPSB from './pages/PendaftaranPSB.jsx'

export const ROUTE_PENDAFTARAN = '#/pendaftaran-psb-online'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return hash
}

export default function App() {
  const hash = useHashRoute()
  const isPendaftaran = hash.startsWith(ROUTE_PENDAFTARAN)

  useEffect(() => {
    if (isPendaftaran) {
      window.scrollTo({ top: 0 })
      return
    }
    // Navigasi anchor dalam halaman beranda (mis. #psb-registrasi)
    if (hash.startsWith('#') && !hash.startsWith('#/')) {
      const id = decodeURIComponent(hash.slice(1))
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [hash, isPendaftaran])

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        {isPendaftaran ? (
          <PendaftaranPSB />
        ) : (
          <div className="flex flex-col w-full">
            <Hero />
            <Philosophy />
            <Curriculum />
            <Facilities />
            <Admission />
            <Achievements />
            <Leadership />
            <FaqContact />
          </div>
        )}
      </main>
      <FloatingChat />
      <Footer />
    </>
  )
}
