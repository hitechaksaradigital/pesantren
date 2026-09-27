// Komponen form reusable mengikuti gaya desain formulir PSB online

export function SectionCard({ id, icon, number, title, badge, badgeClass, children }) {
  return (
    <div
      id={id}
      className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6 scroll-mt-[140px]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[22px]">{icon}</span>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
              Bagian {number}
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary font-bold">{title}</h2>
          </div>
        </div>
        <span className={badgeClass}>{badge}</span>
      </div>
      {children}
    </div>
  )
}

const INPUT_CLASS =
  'w-full px-4 py-3.5 rounded-xl bg-surface-container-low/60 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all'

const SELECT_CLASS =
  'w-full appearance-none px-4 py-3.5 rounded-xl bg-surface-container-low/60 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all cursor-pointer'

export function TextInput({ label, id, hint, required = false, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="font-label-lg text-label-lg text-primary" htmlFor={id}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input id={id} required={required} className={INPUT_CLASS} {...props} />
      {hint && <p className="font-body-sm text-body-sm text-on-surface-variant">{hint}</p>}
    </div>
  )
}

export function SelectInput({ label, id, hint, required = false, children, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="font-label-lg text-label-lg text-primary" htmlFor={id}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <div className="relative">
        <select id={id} required={required} className={SELECT_CLASS} {...props}>
          {children}
        </select>
        <span className="material-symbols-outlined text-[20px] text-on-surface-variant absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
          expand_more
        </span>
      </div>
      {hint && <p className="font-body-sm text-body-sm text-on-surface-variant">{hint}</p>}
    </div>
  )
}

export function FileDrop({ label, badge, badgeClass, icon, caption, placeholderText, accept, fileName, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-lg text-label-lg text-primary flex items-center justify-between">
        <span>{label}</span>
        <span className={badgeClass}>{badge}</span>
      </label>
      <div className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-container-low/40 hover:bg-surface-container-low/80 transition-all text-center cursor-pointer min-h-[170px]">
        <input
          accept={accept}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          type="file"
          onChange={onChange}
        />
        <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary mb-3 shadow-sm group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        <span
          className={`font-title text-[14px] font-semibold ${fileName ? 'text-secondary' : 'text-primary'}`}
        >
          {fileName || placeholderText}
        </span>
        <span className="font-body-sm text-[12px] text-on-surface-variant mt-1">{caption}</span>
      </div>
    </div>
  )
}
