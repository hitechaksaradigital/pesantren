import { ACHIEVEMENTS, GALLERY } from '../data/achievements.js'

export default function Achievements() {
  return (
    <section id="prestasi" className="py-20 bg-surface scroll-mt-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Rekam Jejak Santri</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Prestasi Menembus Batas Global</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Bukti nyata harmoni spiritualitas dan kecerdasan intelektual dalam ragam ajang bergengsi.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-headline-lg text-headline-lg text-secondary font-extrabold">142+</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Trofi Kejuaraan Tingkat Nasional &amp; Antarbangsa (2021-2024)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase">{item.category}</span>
              <h4 className="font-headline-sm text-[18px] text-primary">{item.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((photo) => (
            <div key={photo.caption} className="rounded-xl overflow-hidden relative group h-64">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt={photo.alt}
                src={photo.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-surface-container-lowest font-label-md text-label-md">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
