import { useEffect, useState } from 'react'

const STEPS = [
  { label: 'Langkah 1', title: 'Jenjang & Data Santri', targetId: 'bagian-1' },
  { label: 'Langkah 2', title: 'Data Orang Tua / Wali', targetId: 'bagian-3' },
  { label: 'Langkah 3', title: 'Unggah Dokumen & Kirim', targetId: 'bagian-4' },
]

export default function RegistrationHero() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      let current = 0
      STEPS.forEach((step, index) => {
        const el = document.getElementById(step.targetId)
        if (el && el.getBoundingClientRect().top <= 240) current = index
      })
      setActiveStep(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToStep = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative bg-primary-container text-on-primary py-12 md:py-16 overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
      <div className="absolute left-1/3 -bottom-32 w-80 h-80 rounded-full bg-tertiary-fixed/10 blur-2xl pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md mb-6 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-fixed"></span>
          </span>
          <span className="font-label-md text-label-md text-secondary-fixed tracking-wide uppercase">
            Gelombang 1 Dibuka s/d 15 Januari 2025
          </span>
          <span className="font-label-sm text-label-sm text-on-primary-container font-semibold">• Kuota Terbatas</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <h1 className="font-headline-lg text-headline-lg text-surface-container-lowest font-extrabold tracking-tight">
              Formulir Pendaftaran Santri Baru (PSB)
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl leading-relaxed">
              Tahun Ajaran 2025/2026. Lengkapi formulir pendaftaran daring di bawah ini secara cermat dan benar.
              Estimasi pengisian hanya 5–7 menit.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 w-full sm:w-auto shadow-md">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-on-secondary shrink-0">
                <span className="material-symbols-outlined text-[24px]">timer</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-primary-fixed-dim">Waktu Pengisian</p>
                <p className="font-title text-title text-surface-container-lowest font-bold">~ 5–7 Menit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-surface-container-lowest rounded-2xl p-4 md:p-6 shadow-xl text-on-surface">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {STEPS.map((step, index) => {
              const isActive = activeStep === index
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => scrollToStep(step.targetId)}
                  className={`flex items-center gap-3.5 p-3 rounded-xl text-left transition-colors ${
                    isActive ? 'bg-surface-container-low' : 'bg-surface-container-lowest hover:bg-surface-container-low/40'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-headline-sm text-headline-sm shrink-0 ${
                      isActive
                        ? 'bg-secondary text-on-secondary shadow-sm'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`font-label-sm text-label-sm uppercase tracking-wider block ${
                        isActive ? 'text-secondary font-bold' : 'text-on-surface-variant/80 font-semibold'
                      }`}
                    >
                      {step.label}
                    </span>
                    <p
                      className={`font-title text-[15px] truncate ${
                        isActive ? 'font-bold text-on-surface' : 'font-semibold text-on-surface-variant'
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
