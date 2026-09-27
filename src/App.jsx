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

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
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
      </main>
      <FloatingChat />
      <Footer />
    </>
  )
}
