import { HERO_IMG } from '../images.js'

const METRICS = [
  { value: '1.850+', label: 'Santri Mukim Aktif' },
  { value: '30 Juz', label: 'Target Mutqin Sanad' },
  { value: '98.4%', label: 'Lulusan ke PTN & Luar Negeri' },
]

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative bg-primary-container text-on-primary overflow-hidden pb-20 pt-10 lg:pt-16 scroll-mt-[120px]"
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-tertiary-fixed opacity-10 blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-secondary/30 text-tertiary-fixed">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                Penerimaan Santri Baru TA 2025/2026 Dibuka
              </span>
            </div>
            <h1 className="font-display text-display-mobile md:text-display text-surface-container-lowest leading-tight">
              Membina Generasi Qur'ani <span className="text-tertiary-fixed font-display">Berprestasi Global</span>
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
              Menyatukan keutuhan sanad keilmuan syariah salafiyah, ketajaman sains terapan, serta kemahiran dwi-bahasa
              aktif Arab-Inggris dalam ekosistem asrama komprehensif 24 jam yang asri dan beradab.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg shadow-lg hover:bg-secondary/90 transition-all transform hover:-translate-y-0.5"
                href="#psb-registrasi"
              >
                <span>Daftar Santri Baru (PSB)</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest/10 text-surface-container-lowest font-label-lg text-label-lg backdrop-blur-sm hover:bg-surface-container-lowest/20 transition-all"
                href="#panduan-pendidikan"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Unduh Panduan Pendidikan</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col bg-surface-container-lowest/5 backdrop-blur-sm p-4 rounded-xl"
                >
                  <span className="font-display text-headline-sm lg:text-headline-lg text-tertiary-fixed">
                    {metric.value}
                  </span>
                  <span className="font-body-sm text-body-sm text-primary-fixed mt-1">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest/10">
              <img
                className="w-full h-[460px] object-cover"
                alt="Kampus pesantren modern dengan kubah masjid dan pepohonan hijau"
                src={HERO_IMG}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md text-on-surface flex items-center justify-between">
                <div>
                  <p className="font-label-sm text-label-sm text-secondary uppercase">Kampus Asri 18 Hektar</p>
                  <p className="font-title text-title text-primary">Lingkungan Hijau Bebas Polusi</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">park</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
