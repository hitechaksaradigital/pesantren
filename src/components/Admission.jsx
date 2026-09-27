import { STEPS, REQUIREMENTS, FEES } from '../data/admission.js'

export default function Admission() {
  return (
    <section id="psb-registrasi" className="py-20 bg-surface-container-lowest scroll-mt-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
            Prosedur Pendaftaran
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Alur Penerimaan Santri Baru (PSB)</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Proses seleksi transparan, berbasis asesmen komprehensif potensi anak dan kesiapan orang tua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-container-low/50 relative">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary font-headline-sm flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h4 className="font-title text-title text-primary">{step.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-surface-container-low/30 p-8 rounded-2xl flex flex-col gap-4">
            <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">fact_check</span>
              <span>Prasyarat Berkas Pendaftaran</span>
            </h3>
            <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
              {REQUIREMENTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 bg-surface-container-low/30 p-8 rounded-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">receipt_long</span>
                <span>Transparansi Investasi Pendidikan</span>
              </h3>
              <span className="text-label-sm font-label-sm text-secondary bg-surface-container-low px-2 py-1 rounded">
                TA 2025/2026
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FEES.map((fee) => (
                <div key={fee.label} className="p-4 rounded-xl bg-surface-container-lowest flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{fee.label}</span>
                  <span className="font-headline-sm text-headline-sm text-primary">{fee.value}</span>
                  <span className="text-[11px] text-on-surface-variant">{fee.note}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-primary-container text-on-primary">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-tertiary-fixed">Gelombang I Sedang Dibuka</span>
                <span className="font-title text-[15px]">
                  1 Oktober 2024 - 15 Januari 2025 (Kuota Terbatas)
                </span>
              </div>
              <a
                className="px-5 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all text-center whitespace-nowrap"
                href="#/pendaftaran-psb-online"
              >
                Isi Formulir Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
