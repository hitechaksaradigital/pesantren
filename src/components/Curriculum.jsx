import { TIERS, SCHEDULE } from '../data/curriculum.js'

export default function Curriculum() {
  return (
    <section id="panduan-pendidikan" className="py-20 bg-surface-container-low/60 scroll-mt-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Struktur Akademik
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Tiga Jenjang Pendidikan Terpadu</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Pilihan marhalah pendidikan yang sistematis mempersiapkan santri unggul secara akademik dan ruhiyah.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
              Kurikulum Merdeka Plus
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm">
              Sanad Mutashil
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TIERS.map((tier) => (
            <div
              key={tier.title}
              className={`bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden ${
                tier.featured ? 'shadow-md' : 'shadow-sm'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-4 py-1 text-[11px] font-bold rounded-bl-xl tracking-wider">
                  UNGGULAN
                </div>
              )}
              <div className="flex flex-col gap-4">
                <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2.5 py-1 rounded self-start">
                  {tier.badge}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">{tier.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{tier.desc}</p>
                <div className="flex flex-col gap-2 pt-2">
                  <span className="font-label-sm text-label-sm text-primary font-bold">{tier.booksLabel}</span>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1.5">
                    {tier.books.map((book) => (
                      <li key={book} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {book}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 bg-surface-container-low/40 rounded-xl p-3 flex justify-between items-center text-secondary font-label-sm text-label-sm">
                <span>{tier.duration}</span>
                <span className="font-bold">{tier.target}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Matriks Ritme Keseharian Santri</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Kedisiplinan waktu yang membentuk etos ibadah, belajar, dan kepemimpinan.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm bg-secondary-fixed/50 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              <span>Jadwal Harian 24 Jam</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCHEDULE.map((item) => (
              <div key={item.time} className="p-4 rounded-xl bg-surface-container-low/40 flex flex-col gap-2">
                <div className="flex items-center justify-between text-secondary font-label-md text-label-md">
                  <span className="font-bold">{item.time}</span>
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                </div>
                <p className="font-title text-[15px] text-primary">{item.title}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
