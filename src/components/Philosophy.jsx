const PILLARS = [
  {
    icon: 'school',
    title: 'Kurikulum Terakreditasi',
    desc: "Integrasi kurikulum Kemenag/Kemendikbudristek berakreditasi A 'Unggul' dengan manhaj pondok modern dan pendalaman kitab turats bertingkat.",
  },
  {
    icon: 'translate',
    title: "Bi'ah Lughawiyah 24 Jam",
    desc: 'Lingkungan percakapan dwi-bahasa Arab dan Inggris harian secara intensif dengan disiplin muhadatsah, pidato tiga bahasa, dan debate clinic.',
  },
  {
    icon: 'sports_kabaddi',
    title: 'Ragam Minat & Robotika',
    desc: 'Penyaluran bakat menyeluruh: panahan sunnah, pacuan berkuda, bela diri pencak silat, laboratorium robotika AI, dan sains antariksa santri.',
  },
  {
    icon: 'diversity_3',
    title: 'Mentoring Asrama Penuh',
    desc: 'Rasio 1 musyrif untuk 12 santri menjamin pengawasan ibadah, bimbingan adab personal, pendampingan kesehatan, dan evaluasi berkala bersama wali.',
  },
]

const VALUES = ['Integritas Moral', 'Akal Kritis Riset', 'Kemandirian Jiwa', 'Khidmah Umat']

export default function Philosophy() {
  return (
    <section id="profil-dan-visi" className="py-20 bg-surface scroll-mt-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        <div className="rounded-2xl bg-surface-container-lowest p-8 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                Falsafah Tri-Dharma Ma'had
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Adab, Kemandirian &amp; Keterbukaan Akal</h2>
              <div className="h-1 w-20 bg-secondary rounded-full"></div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
              <p>
                Di Ma'had Al-Hikmah, adab mendahului ilmu pengetahuan. Kami menanamkan kesadaran ubudiyah yang kokoh,
                melatih ketangguhan mental hidup mandiri, serta memupuk keterbukaan intelektual agar santri siap menjadi
                pemecah problematika umat di era peradaban global tanpa mencabut akar nilai salafush shalih.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {VALUES.map((value) => (
                  <div key={value} className="flex items-center gap-2 text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Keunggulan Eksklusif
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Empat Pilar Keistimewaan Ma'had</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Rancangan holistik terstruktur demi menumbuhkan potensi fitrah santri secara seimbang dan optimal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-low text-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{pillar.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
