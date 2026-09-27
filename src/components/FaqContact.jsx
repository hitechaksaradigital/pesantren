import { FAQS } from '../data/faqs.js'
import { MAP_IMG } from '../images.js'

export default function FaqContact() {
  return (
    <section id="kontak-dan-faq" className="py-20 bg-surface scroll-mt-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Pusat Bantuan &amp; Kebijakan
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Menjawab keraguan umum ayah bunda terkait regulasi gawai, sistem jenguk berkala, dan masa adaptasi santri
              baru di lingkungan asrama.
            </p>
            <div className="mt-4 p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
              <span className="font-title text-title text-primary">Masih Butuh Konsultasi Personal?</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tim Humas dan Konselor Ma'had siap menyambut kehadiran Bapak/Ibu untuk berkunjung ke kampus secara
                langsung.
              </p>
              <a
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all"
                href="https://wa.me/6281234567890"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Hubungi Humas PSB via WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col gap-2">
                <h4 className="font-headline-sm text-[17px] text-primary flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">{faq.icon}</span>
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden bg-surface-container-lowest shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px]">
              <div
                className="w-full h-full bg-cover bg-center"
                aria-label="Peta lokasi Pesantren Darul Ulum Al Hikmah"
                role="img"
                style={{ backgroundImage: `url('${MAP_IMG}')` }}
              ></div>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between gap-6 bg-surface-container-lowest">
              <div className="flex flex-col gap-4">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  Sekretariat Pendaftaran Kampus
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Ma'had Al-Hikmah Islamic Boarding School
                </h3>
                <div className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">location_on</span>
                    <span>Jl. Raya Pesantren No. 99, Kecamatan Sukamaju, Jawa Timur 65153</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                    <span>+62 812-3456-7890 (Panitia PSB)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
                    <span>psb@darululum-alhikmah.sch.id</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
                    <span>Senin - Sabtu: 08.00 - 15.30 WIB</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  className="flex-1 text-center py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all"
                  href="#/pendaftaran-psb-online"
                >
                  Daftar Online Sekarang
                </a>
                <a
                  className="px-4 py-3 rounded-lg bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-surface-container text-center flex items-center justify-center gap-1.5 transition-all"
                  href="https://maps.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Buka Petunjuk Arah</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

