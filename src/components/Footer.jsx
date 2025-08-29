export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60">© {new Date().getFullYear()} 11 Dimension Labs</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-neonCyan" href="https://x.com/11dimensiongame" aria-label="X/Twitter">X</a>
          <a className="hover:text-neonPink" href="#" aria-label="Discord">Discord</a>
          <a className="hover:text-neonCyan" href="#" aria-label="Whitepaper">Whitepaper</a>
          <span className="text-white/50 text-sm">Powered by Abstract</span>
        </div>
      </div>
    </footer>
  );
}
