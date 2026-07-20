export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="text-2xl font-bold tracking-tight text-white">
        INSYTRA
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <a
        href="#contact"
        className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
      >
        Book a Call
      </a>
    </nav>
  );
}