import { useCallback, useEffect, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../../lib/supabase.js'

const LIMIT = 50

const STATUS_STYLES = {
  menunggu: 'bg-surface-container text-on-surface-variant',
  verifikasi: 'bg-secondary-fixed text-on-secondary-fixed',
  diterima: 'bg-secondary text-on-secondary',
  ditolak: 'bg-error-container text-on-error-container',
}

function formatDate(value) {
  return new Date(value).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function RegisteredCandidates({ reloadKey = 0 }) {
  const [rows, setRows] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error | unconfigured
  const [errorMessage, setErrorMessage] = useState('')

  const load = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setStatus('unconfigured')
      return
    }
    setStatus('loading')
    const { data, error } = await supabase.rpc('get_daftar_pendaftar_psb', { limit_count: LIMIT })
    if (error) {
      setErrorMessage(error.message)
      setStatus('error')
      return
    }
    setRows(data || [])
    setStatus('ready')
  }, [])

  useEffect(() => {
    load()
  }, [load, reloadKey])

  return (
    <section className="max-w-5xl mx-auto w-full px-6 lg:px-8 pb-16">
      <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[22px]">groups</span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                Statistik PSB
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                Daftar Calon Santri Terdaftar DIEDIT
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Pendaftar terbaru yang tercatat di sistem (maks. {LIMIT} entri terakhir).
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={load}
            className="inline-flex items-center gap-1.5 self-start sm:self-auto px-4 py-2.5 rounded-lg bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            <span>Muat Ulang</span>
          </button>
        </div>

        {status === 'unconfigured' && (
          <div className="p-4 rounded-xl bg-surface-container-low/60 text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">info</span>
            <span>
              Konfigurasi Supabase belum diisi. Lengkapi <b>VITE_SUPABASE_URL</b> dan{' '}
              <b>VITE_SUPABASE_ANON_KEY</b> pada file <b>.env</b>, jalankan skema SQL, lalu muat ulang halaman.
            </span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-xl bg-error-container text-on-error-container flex items-start justify-between gap-3">
            <span className="font-body-sm text-body-sm">Gagal memuat daftar pendaftar: {errorMessage}</span>
            <button type="button" onClick={load} className="font-label-md text-label-md font-bold underline shrink-0">
              Coba Lagi
            </button>
          </div>
        )}

        {status === 'loading' && (
          <div className="flex items-center gap-2.5 text-on-surface-variant font-body-sm text-body-sm py-4">
            <span className="material-symbols-outlined text-[20px] text-secondary animate-spin">progress_activity</span>
            <span>Memuat daftar pendaftar…</span>
          </div>
        )}

        {status === 'ready' && rows.length === 0 && (
          <div className="flex flex-col items-center gap-2 py-8 text-center">
            <span className="material-symbols-outlined text-secondary text-[32px]">person_search</span>
            <p className="font-title text-[15px] text-primary font-bold">Belum ada calon santri yang terdaftar</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Jadilah pendaftar pertama melalui formulir di atas.
            </p>
          </div>
        )}

        {status === 'ready' && rows.length > 0 && (
          <>
            {/* Tabel: layar md ke atas */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low/60 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                    <th className="px-4 py-3 rounded-l-lg">Kode</th>
                    <th className="px-4 py-3">Nama Calon Santri</th>
                    <th className="px-4 py-3">Jenjang</th>
                    <th className="px-4 py-3">Domisili</th>
                    <th className="px-4 py-3">Tanggal Daftar</th>
                    <th className="px-4 py-3 rounded-r-lg">Status</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  {rows.map((row) => (
                    <tr key={row.kode_pendaftar} className="border-b border-surface-container-high/60 last:border-0">
                      <td className="px-4 py-3 font-bold text-secondary whitespace-nowrap">{row.kode_pendaftar}</td>
                      <td className="px-4 py-3">{row.nama_lengkap}</td>
                      <td className="px-4 py-3">{row.jenjang}</td>
                      <td className="px-4 py-3">{row.kota_kabupaten}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-on-surface-variant">
                        {formatDate(row.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full font-label-sm text-label-sm capitalize ${
                            STATUS_STYLES[row.status] || STATUS_STYLES.menunggu
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Kartu: layar kecil */}
            <div className="flex flex-col gap-3 md:hidden">
              {rows.map((row) => (
                <div
                  key={row.kode_pendaftar}
                  className="p-4 rounded-xl bg-surface-container-low/40 flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-label-sm text-label-sm text-secondary">{row.kode_pendaftar}</span>
                    <span
                      className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm capitalize ${
                        STATUS_STYLES[row.status] || STATUS_STYLES.menunggu
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                  <p className="font-title text-[15px] text-primary font-bold">{row.nama_lengkap}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {row.jenjang} • {row.kota_kabupaten} • {formatDate(row.created_at)}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

