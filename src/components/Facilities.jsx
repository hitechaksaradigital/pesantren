const FACILITIES = [
  {
    tag: 'Pusat Spiritual',
    title: "Kompleks Masjid Jami' Utama",
    desc: 'Kapasitas 2.500 jamaah dengan akustik terpadu, perpustakaan kitab turats terlengkap, dan ruang halaqah tahfizh berpendingin udara alami.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH0IBev_bTV_k7SjB7Qx8_LFS_EgdpdOJtxI677UO4sxnu5qsCb1TTgrsnwuReRGv9GbsPwm4bgW7ykw7nvLO6Kla2Ktv9u3IAwPpQcRl3VYrgzkH0LO6crMMTe8H5UZHMDXGWnJf7Nx95xgAKNl2vUbRtsLvtrUYJPevd7fnRL3e0V426iHxFV8ztQof_Y0nSWMu_rPO9u9Z_uQJagqAypWtwRxNKJfD81erlbP_7l-s6fmo1oLm0',
    alt: 'Interior masjid megah pesantren modern dengan karpet sajadah dan cahaya lembut',
  },
  {
    tag: 'Hunian Sehat',
    title: 'Asrama Berstandar Higienis',
    desc: 'Kamar berpenghuni terkontrol dengan sirkulasi silang, ranjang kokoh personal, lemari terkunci, dan kamar mandi bersih bersekat sanitasi modern.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaQYft6ZE2Fkhu_qvbGdmT2tOKwVl5_4LBnV6xGNpsk7Gsu4aVH8zqUKb-WAqsuSlpy9i7jWMNpLl0Q8c2VDjmr4xfH2_nPAFJ2QeN_a_BtXwoaVwAub4NEsPlWXKSSTzoMZQ1pNvSjti31Ojy-umIPzpblh5WO9hAhT47iiWROZ8-57PvcVaJFllEw_ivl6CKjYPDaIDDA-iJYFxX6OwJnl54qleki4qxNyfwVyvOtAGwiUQbRnlS',
    alt: 'Kamar asrama pesantren modern dengan ranjang kayu dan meja belajar',
  },
  {
    tag: 'Riset & Teknologi',
    title: 'Smart Class & Lab Sains Terpadu',
    desc: 'Dilengkapi proyektor interaktif interaktif, laboratorium komputasi AI, laboratorium fisika-biologi modern, serta jaringan internet terfilter edukatif.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArrjhOq1zPtJ1PaE7dw6KVZhYZI4-nRX5Xd8hUX-H4j2KL-T3wlcpw5tc44ozmpsHbyPlpYX1lCi7Sj_a-zNP490o8cOVV9AFVjx7WjmPoPOAAaYtajPmDErxCBnogr-5FPKwT4QJ3-qg_NSVLoe7ir4r_b5lGBw4Cb31j19JJXFxiWBDoHrbcGMaIW8WP-c6P-jjOv-gcrmksXU8vKH91UyC68cTO46iwxDatMio6XSrzaCMnvId-',
    alt: 'Laboratorium sains dan robotika modern sekolah dengan meja komputer',
  },
  {
    tag: 'Sunnah & Olahraga',
    title: 'Gelanggang Panahan & Berkuda',
    desc: 'Sarana olahraga sunnah berstandar kompetisi dengan instruktur berlisensi: lapangan pacu kuda, arena memanah outdoor, lapangan futsal, dan basket.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADeMP8QqJTMZnBt8VkidSNn7ZPRX62kjDXwlgY4FF__M2Oqzj2XXY1-rdWw0EUJGUDc_fq5GW9miIa0PZNnmUAYWs2Cejl60b1M9uSZ1ADASOm1YJaoCqAbo6ROIxsVOL_PIOFUvCSXi--gcWvXvly3uzUf1-fDTINeGEphTqGuNGFNsLKUj_rdAgenvh6K5HOkKW6NX8Zv9GLrz3faUfbHc6MD1Tu-DEIuX6sNoE5pqTOHGxJtCWg',
    alt: 'Lapangan panahan dan kandang kuda di sekolah pesantren modern',
  },
  {
    tag: 'Gizi Seimbang',
    title: 'Dapur Gizi & Ruang Makan Higienis',
    desc: 'Penyediaan menu halal 3 kali sehari bersertifikasi gizi dengan standar ketat HACCP, disajikan prasmanan tertib mengajarkan adab makan nabawi.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHvN3isH7lN_gSTJa64396ZKp47G4xbrUrSUsyskC-gAeG8Lt5aoU0l1UXbqfTTGedq1P7yMhT87ARNZAaDVUWFi2pc7LEzMSyS5qnvu-5i3z2I_haWneT1DfkEjj-fOXAG4XAL7Nq-IoPZtlOPG3oeDqb47yNOMSns5SjUJ_qpChd14VnnJkwVzE691QRNHp-B430Jst4zdEVLnLR5hwvft2sLU2oEws8HqNRk5irulvL6ipMd5Kz',
    alt: 'Ruang makan higienis pesantren dengan meja kayu rapi',
  },
  {
    tag: 'Layanan Kesehatan',
    title: 'Pos Kesehatan Pesantren (Poskestren)',
    desc: 'Layanan dokter dan perawat standby 24 jam dengan ambulans siaga, ruang observasi isolasi ramah, dan kemitraan rujukan rumah sakit tipe-A terdekat.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe4q0iQz7sH5IL_GB1v5vShlaJMK93bQnT-lxAbY8bQGA9Iha8HFGZ-rZI4vHvVYa5CO1BMiVnmXG7qlIcLhgGy6kZpVqCFQQwMtH-8AUBYhhZf99_ur8fvXe9_9MRVmVmvVtngZP9kmluvwUPLo3yW-NAAJ-e6sLLGA1xx-Q-Nasx9dJ3Uklz6eDgTsa8GwDyOXo_P7VWhyHVjLxmFYaHUufCBwGIGPDnnMjj046IJ0q6RuS5LgYS',
    alt: 'Klinik kesehatan pesantren yang bersih dan nyaman',
  },
]

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-20 bg-surface scroll-mt-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
            Infrastruktur Berkelanjutan
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Fasilitas Kampus Pesantren Modern</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Dirancang memenuhi standar kesehatan fisik, kenyamanan belajar, dan ketenangan spiritual santri.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.title}
              className="group rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={facility.alt}
                  src={facility.img}
                />
                <span className="absolute top-3 left-3 bg-primary-container/80 backdrop-blur-sm text-on-primary font-label-sm text-label-sm px-2.5 py-1 rounded">
                  {facility.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">{facility.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
