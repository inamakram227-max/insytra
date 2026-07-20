export default function Services() {
  const services = [
    {
      title: "AI Automation",
      description: "Custom AI agents and workflows that handle repetitive tasks, qualify leads, and reply to customers 24/7 — so your team saves hours every week.",
    },
    {
      title: "Web Design & Development",
      description: "Fast, modern websites that look premium and turn visitors into paying customers. Built to load quickly and rank well on Google.",
    },
    {
      title: "Digital Marketing",
      description: "Marketing systems that generate qualified leads — not just traffic. From SEO to automated outreach that fills your pipeline.",
    },
  ];

  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          What We Do
        </h2>
        <p className="mb-16 text-center text-lg text-zinc-400">
          Everything your business needs to grow, automated and optimized.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}