export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Let&apos;s Build Something Great
        </h2>
        <p className="mb-10 text-lg text-zinc-400">
          Ready to automate your business and grow faster? Get in touch and let&apos;s talk about what we can build for you.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://wa.me/923294438243" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-8 py-3 text-base font-medium text-black hover:bg-zinc-200 transition-colors">
            Message on WhatsApp
          </a>
          <a href="mailto:inamakram227@gmail.com" className="rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}