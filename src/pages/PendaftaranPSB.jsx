import { useEffect, useRef, useState } from 'react'
import RegistrationHero from '../components/registration/RegistrationHero.jsx'
import { SectionCard, TextInput, SelectInput, FileDrop } from '../components/registration/FormControls.jsx'
import { DRAFT_KEY, INITIAL_FORM, JENJANG_OPTIONS } from '../data/registration.js'

export default function PendaftaranPSB() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [fileNames, setFileNames] = useState({ foto: '', kk: '', rapor: '' })
  const [submitted, setSubmitted] = useState(false)
  const statusRef = useRef(null)

  // Pulihkan draf tersimpan (jika ada) saat halaman dibuka
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY)
      if (raw) {
        const draft = JSON.parse(raw)
        setForm((prev) => ({ ...prev, ...draft, persetujuan: false }))
      }
    } catch {
      /* abaikan draf rusak */
    }
  }, [])

  useEffect(() => {
    if (submitted && statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [submitted])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setSubmitted(false)
  }

  const handleFile = (key) => (event) => {
    const file = event.target.files && event.target.files[0]
    setFileNames((prev) => ({ ...prev, [key]: file ? file.name : '' }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.persetujuan) {
      alert('Mohon centang persetujuan keabsahan data terlebih dahulu.')
      return
    }
    setSubmitted(true)
  }

  const saveDraft = () => {
    try {
      const { persetujuan, ...draft } = form
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
      alert('Draf pendaftaran Anda telah berhasil disimpan di peramban ini.')
    } catch {
      alert('Gagal menyimpan draf di peramban ini.')
    }
  }

  return (
    <div className="flex flex-col w-full">
      <RegistrationHero />
      <section className="max-w-5xl mx-auto w-full px-6 lg:px-8 py-10 md:py-14">
        <form className="flex flex-col gap-10" id="psbForm" onSubmit={handleSubmit}>
          {/* BAGIAN 1: Pilihan Program & Jenjang Pendidikan */}
          <SectionCard
            id="bagian-1"
            icon="school"
            number="1"
            title="Pilihan Program & Jenjang Pendidikan"
            badge="Wajib Diisi"
            badgeClass="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full"
          >
            <div className="flex flex-col gap-3">
              <label className="font-label-lg text-label-lg text-primary">
                Pilih Marhalah / Jenjang Pendidikan Dituju <span className="text-error">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {JENJANG_OPTIONS.map((option) => (
                  <label
                    key={option.value}
                    className="relative flex flex-col p-5 rounded-xl cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low/30 transition-all shadow-sm has-[:checked]:bg-secondary-container/40 has-[:checked]:shadow-md"
                  >
                    <input
                      className="sr-only peer"
                      name="jenjang"
                      type="radio"
                      value={option.value}
                      checked={form.jenjang === option.value}
                      onChange={handleChange}
                    />
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary peer-checked:bg-secondary peer-checked:text-on-secondary">
                        <span className="material-symbols-outlined text-[18px]">{option.icon}</span>
                      </span>
                      <span className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary opacity-0 peer-checked:opacity-100">
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      </span>
                    </div>
                    <h3 className="font-title text-title text-primary font-bold">{option.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                      {option.desc}
                    </p>
                    <div className="mt-4 pt-3 flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-semibold">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span> {option.footer}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <SelectInput
                label="Jalur Pendaftaran"
                id="jalurPendaftaran"
                name="jalur"
                required
                value={form.jalur}
                onChange={handleChange}
                hint="Jalur beasiswa melampirkan syahadah hafalan pada bagian berkas."
              >
                <option value="reguler">Jalur Reguler Prestasi (Akademik &amp; Minat)</option>
                <option value="mandiri">Jalur Mandiri Terpadu</option>
                <option value="beasiswa">Beasiswa Tahfizh Al-Qur'an (Minimal 10+ Juz Mutqin)</option>
              </SelectInput>
              <SelectInput
                label="Metode Seleksi Masuk"
                id="lokasiSeleksi"
                name="metode"
                required
                value={form.metode}
                onChange={handleChange}
                hint="Tes mencakup: Baca Al-Qur'an, Psikotes potensi, &amp; Wawancara Wali."
              >
                <option value="offline">Offline di Kampus Utama (Revisi &amp; Visitasi Langsung)</option>
                <option value="online">Online / Daring (Khusus Calon Santri Luar Pulau Jawa)</option>
              </SelectInput>
            </div>
          </SectionCard>


          {/* BAGIAN 2: Data Pribadi Calon Santri */}
          <SectionCard
            id="bagian-2"
            icon="person"
            number="2"
            title="Data Pribadi Calon Santri"
            badge="Sesuai Akta"
            badgeClass="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                className="md:col-span-2"
                label="Nama Lengkap Santri"
                id="namaLengkap"
                name="namaLengkap"
                type="text"
                required
                value={form.namaLengkap}
                onChange={handleChange}
                placeholder="Contoh: Muhammad Azzam Al-Faruqi"
                hint="Tuliskan nama lengkap sesuai dengan Akta Kelahiran resmi tanpa gelar."
              />
              <TextInput
                label="NISN (Nomor Induk Siswa Nasional)"
                id="nisn"
                name="nisn"
                type="text"
                required
                maxLength={10}
                value={form.nisn}
                onChange={handleChange}
                placeholder="10 digit angka, cth: 0081234567"
              />
              <TextInput
                label="NIK Santri (Sesuai KK)"
                id="nik"
                name="nik"
                type="text"
                required
                maxLength={16}
                value={form.nik}
                onChange={handleChange}
                placeholder="16 digit NIK pada Kartu Keluarga"
              />
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-primary">
                  Jenis Kelamin <span className="text-error">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low/60 cursor-pointer has-[:checked]:bg-secondary-container/50 transition-colors">
                    <input
                      className="text-secondary focus:ring-secondary"
                      name="gender"
                      type="radio"
                      value="Laki-laki"
                      checked={form.gender === 'Laki-laki'}
                      onChange={handleChange}
                    />
                    <span className="font-title text-[15px] text-on-surface font-medium">Santri Putra</span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low/60 cursor-pointer has-[:checked]:bg-secondary-container/50 transition-colors">
                    <input
                      className="text-secondary focus:ring-secondary"
                      name="gender"
                      type="radio"
                      value="Perempuan"
                      checked={form.gender === 'Perempuan'}
                      onChange={handleChange}
                    />
                    <span className="font-title text-[15px] text-on-surface font-medium">Santri Putri</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <TextInput
                  label="Tempat Lahir"
                  id="tempatLahir"
                  name="tempatLahir"
                  type="text"
                  required
                  value={form.tempatLahir}
                  onChange={handleChange}
                  placeholder="Kota / Kab"
                />
                <TextInput
                  label="Tanggal Lahir"
                  id="tanggalLahir"
                  name="tanggalLahir"
                  type="date"
                  required
                  value={form.tanggalLahir}
                  onChange={handleChange}
                />
              </div>
              <TextInput
                label="Asal Sekolah / Madrasah"
                id="asalSekolah"
                name="asalSekolah"
                type="text"
                required
                value={form.asalSekolah}
                onChange={handleChange}
                placeholder="Contoh: SD Islam Terpadu Al-Fatih Malang"
              />
              <SelectInput
                label="Jumlah Hafalan Al-Qur'an Saat Ini"
                id="hafalan"
                name="hafalan"
                required
                value={form.hafalan}
                onChange={handleChange}
              >
                <option value="0-1">0 - 1 Juz (Juz 30 Dasar)</option>
                <option value="2-5">2 - 5 Juz Mutqin</option>
                <option value="6-15">6 - 15 Juz Mutqin</option>
                <option value="16-30">16 - 30 Juz (Hafizh / Pra-Sanad)</option>
              </SelectInput>
            </div>
          </SectionCard>


          {/* BAGIAN 3: Data Orang Tua / Wali Santri */}
          <SectionCard
            id="bagian-3"
            icon="family_restroom"
            number="3"
            title="Data Orang Tua / Wali Santri"
            badge="Komunikasi PSB"
            badgeClass="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Nama Lengkap Ayah Kandung"
                id="namaAyah"
                name="namaAyah"
                type="text"
                required
                value={form.namaAyah}
                onChange={handleChange}
                placeholder="Nama ayah sesuai KTP / KK"
              />
              <TextInput
                label="Nama Lengkap Ibu Kandung"
                id="namaIbu"
                name="namaIbu"
                type="text"
                required
                value={form.namaIbu}
                onChange={handleChange}
                placeholder="Nama ibu sesuai KTP / KK"
              />
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-primary" htmlFor="whatsappWali">
                  Nomor WhatsApp Aktif Wali <span className="text-error">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 font-body-md text-body-md text-on-surface-variant font-medium">
                    +62
                  </span>
                  <input
                    className="w-full pl-14 pr-4 py-3.5 rounded-xl bg-surface-container-low/60 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    id="whatsappWali"
                    name="whatsapp"
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="812-3456-7890"
                  />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Digunakan untuk kirim nomor registrasi resmi, token seleksi, dan grup informasi.
                </p>
              </div>
              <TextInput
                label="Pekerjaan Orang Tua / Wali"
                id="pekerjaanOrtu"
                name="pekerjaan"
                type="text"
                required
                value={form.pekerjaan}
                onChange={handleChange}
                placeholder="Contoh: Wiraswasta / PNS / Guru / Dokter"
              />
              <SelectInput
                label="Provinsi Domisili"
                id="provinsi"
                name="provinsi"
                required
                value={form.provinsi}
                onChange={handleChange}
              >
                <option value="">Pilih Provinsi</option>
                <option value="Jawa Timur">Jawa Timur</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="DI Yogyakarta">DI Yogyakarta</option>
                <option value="Banten">Banten</option>
                <option value="Luar Pulau Jawa">Luar Pulau Jawa / Mancanegara</option>
              </SelectInput>
              <TextInput
                label="Kota / Kabupaten Domisili"
                id="kotaKab"
                name="kotaKab"
                type="text"
                required
                value={form.kotaKab}
                onChange={handleChange}
                placeholder="Contoh: Kota Surabaya / Kab. Malang"
              />
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-lg text-label-lg text-primary" htmlFor="alamatRumah">
                  Alamat Lengkap Rumah <span className="text-error">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-low/60 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  id="alamatRumah"
                  name="alamat"
                  required
                  rows="2"
                  value={form.alamat}
                  onChange={handleChange}
                  placeholder="Nama Jalan, RT/RW, Dusun/Kelurahan, Kecamatan, dan Kode Pos"
                ></textarea>
              </div>
            </div>
          </SectionCard>


          {/* BAGIAN 4: Unggah Berkas Persyaratan Singkat */}
          <SectionCard
            id="bagian-4"
            icon="upload_file"
            number="4"
            title="Unggah Berkas Persyaratan Singkat"
            badge="Maks. 5 MB / Berkas"
            badgeClass="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-3 py-1 rounded-full font-semibold"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FileDrop
                label="Pas Foto Santri"
                badge="*Wajib"
                badgeClass="text-error font-body-sm"
                icon="account_box"
                placeholderText="Pilih Pas Foto"
                caption="Latar Belakang Biru / Merah (JPG/PNG)"
                accept="image/*"
                fileName={fileNames.foto}
                onChange={handleFile('foto')}
              />
              <FileDrop
                label="Kartu Keluarga (KK)"
                badge="*Wajib"
                badgeClass="text-error font-body-sm"
                icon="badge"
                placeholderText="Pilih Scan KK / Akta"
                caption="Scan Jelas Format PDF atau Gambar"
                accept=".pdf,image/*"
                fileName={fileNames.kk}
                onChange={handleFile('kk')}
              />
              <FileDrop
                label="Rapor 2 Semester Terakhir"
                badge="(Opsional)"
                badgeClass="text-on-surface-variant font-body-sm"
                icon="description"
                placeholderText="Pilih Berkas Rapor"
                caption="Bisa disusulkan saat tes seleksi"
                accept=".pdf,image/*"
                fileName={fileNames.rapor}
                onChange={handleFile('rapor')}
              />
            </div>
          </SectionCard>


          {/* BAGIAN 5: Pernyataan, CTA & Submit */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-8">
            <label className="flex items-start gap-3.5 cursor-pointer select-none">
              <input
                className="mt-1 w-5 h-5 rounded text-secondary focus:ring-secondary cursor-pointer"
                id="persetujuan"
                name="persetujuan"
                type="checkbox"
                required
                checked={form.persetujuan}
                onChange={handleChange}
              />
              <span className="font-body-md text-body-md text-on-surface leading-relaxed">
                Saya menyatakan dengan sungguh-sungguh bahwa data yang diisikan dalam formulir ini adalah benar dan
                valid sesuai dokumen sah, serta bersedia mengikuti seluruh tata tertib dan tahapan proses seleksi PSB
                Pesantren Modern Darul Ulum Al-Hikmah.
              </span>
            </label>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-lg hover:bg-primary transition-all group"
                type="submit"
              >
                <span className="material-symbols-outlined text-[22px] group-hover:translate-x-0.5 transition-transform">
                  send
                </span>
                <span>Kirim Formulir Pendaftaran Sekarang</span>
              </button>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface-container-low text-secondary hover:bg-surface-container transition-all font-label-lg text-label-lg font-semibold"
                onClick={saveDraft}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">save</span>
                <span>Simpan Draf Terlebih Dahulu</span>
              </button>
            </div>

            {submitted && (
              <div
                ref={statusRef}
                className="p-4 rounded-xl bg-surface-container-low text-secondary flex items-start gap-3"
              >
                <span className="material-symbols-outlined text-[22px] shrink-0 text-secondary">check_circle</span>
                <div className="text-body-md">
                  <p className="font-title text-[15px] font-bold text-primary">Formulir Terkirim Berhasil!</p>
                  <p className="text-on-surface-variant text-body-sm mt-0.5">
                    Kode pendaftaran unik serta petunjuk tes seleksi telah dikirimkan ke nomor WhatsApp wali santri.
                  </p>
                </div>
              </div>
            )}

            <div className="p-4 md:p-5 rounded-xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                </div>
                <div>
                  <p className="font-title text-[14px] font-bold text-primary">
                    Butuh Bantuan Teknis Pendaftaran?
                  </p>
                  <p className="font-body-sm text-[13px] text-on-surface-variant">
                    Layanan Hotline PSB: Tersedia setiap hari pukul 08.00 – 16.00 WIB
                  </p>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-bold shadow-sm hover:bg-secondary hover:text-on-secondary transition-all shrink-0"
                href="https://wa.me/6281234567890"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Humas PSB</span>
              </a>
            </div>
          </div>
        </form>
      </section>


      {/* Islamic Assurance Quote Block */}
      <section className="max-w-5xl mx-auto w-full px-6 lg:px-8 pb-16">
        <div className="p-8 rounded-2xl bg-surface-container-low/60 text-center flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-secondary text-[32px]">menu_book</span>
          <p className="font-title text-[18px] text-primary font-bold max-w-xl italic">
            "Menuntut ilmu adalah kewajiban bagi setiap muslim dan pintu keberkahan peradaban."
          </p>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            HR. Ibnu Majah • Pesantren Modern Darul Ulum Al-Hikmah
          </span>
        </div>
      </section>
    </div>
  )
}

