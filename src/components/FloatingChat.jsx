export default function FloatingChat() {
  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <a
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-secondary text-on-secondary shadow-[0_12px_24px_-6px_rgba(9,35,40,0.28)] hover:bg-primary transition-all"
        href="https://wa.me/6281234567890"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-fixed"></span>
        </span>
        <span className="material-symbols-outlined text-[20px]">chat</span>
        <span className="font-label-md text-label-md font-bold tracking-wide">Chat Humas PSB</span>
      </a>
    </aside>
  )
}
