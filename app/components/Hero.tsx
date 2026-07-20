export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
        AI Automation Agency
      </div>
      <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
        We Build AI Systems That Grow Your Business 24/7
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
        Automation, websites, and marketing systems that turn visitors into paying customers while you focus on running your business.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a href="#contact" className="rounded-full bg-white px-8 py-3 text-base font-medium text-black hover:bg-zinc-200 transition-colors">
          Book a Free Call
        </a>
        <a href="#work" className="rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
          See Our Work
        </a>
      </div>
    </section>
  );
}