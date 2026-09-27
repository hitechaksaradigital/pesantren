import { LEADER_IMG } from '../images.js'
import { TESTIMONIALS } from '../data/testimonials.js'

export default function Leadership() {
  return (
    <section className="py-20 bg-surface-container-low/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  alt="KH. Dr. Muhammad Zaki Al-Hikami, M.A."
                  className="w-full h-full object-cover"
                  src={LEADER_IMG}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-transparent p-4 text-on-primary">
                  <p className="font-title text-[15px] font-bold text-center">KH. Dr. M. Zaki Al-Hikami, M.A.</p>
                  <p className="font-body-sm text-[12px] text-tertiary-fixed text-center">Pimpinan Pengasuh Pondok</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">format_quote</span>
                <span>Sambutan Mudir Ma'had</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary">
                "Mendidik Anak Bukan Sekadar Mengisi Wadah, Melainkan Menyalakan Pelita Jiwa."
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Bismillah walhamdulillah. Amanah mendampingi santri di Ma'had Al-Hikmah kami emban dengan penuh rasa
                ta'dzim. Di sini, kami tidak memisahkan antara kecemerlangan rumus sains dan kemuliaan sujud malam. Kami
                ingin melahirkan generasi yang fasih membaca kitab turats, terampil memprogram kecerdasan buatan, berhati
                hanif, dan senantiasa berbakti bagi kemaslahatan persada nusantara serta dunia Islam.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 font-body-sm text-body-sm text-on-surface-variant">
                <div>
                  <span className="font-bold text-primary block">Al-Azhar University, Kairo</span>
                  <span>Kulliyah Ushuluddin (S1 &amp; S2)</span>
                </div>
                <div className="w-px h-8 bg-outline-variant hidden sm:block"></div>
                <div>
                  <span className="font-bold text-primary block">Universitas Islam Negeri</span>
                  <span>Doktor Studi Pemikiran Islam (S3)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Suara Keluarga Besar</span>
            <h3 className="font-headline-lg text-headline-lg text-primary">
              Pengalaman Nyata Bersekolah &amp; Mukim
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-4"
              >
                <p className="font-body-md text-body-md text-on-surface-variant italic">{item.quote}</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary">
                    {item.initials}
                  </div>
                  <div>
                    <h5 className="font-title text-[15px] text-primary">{item.name}</h5>
                    <span className="font-body-sm text-[12px] text-on-surface-variant">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

