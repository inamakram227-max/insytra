export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-2xl font-bold tracking-tight text-white">
          INSYTRA
        </div>
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="text-sm text-zinc-500">
          © 2026 Insytra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}