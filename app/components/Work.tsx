export default function Work() {
  const projects = [
    {
      title: "Rider Go",
      category: "WhatsApp Ordering Bot",
      description: "AI-powered food ordering system on WhatsApp with automated order logging and customer memory.",
    },
    {
      title: "Smile Dental Care",
      category: "Appointment Booking Agent",
      description: "Automated appointment booking assistant that handles patient scheduling 24/7.",
    },
    {
      title: "Lead Capture System",
      category: "AI Email Automation",
      description: "End-to-end pipeline that captures leads, qualifies them with AI, and sends personalized emails automatically.",
    },
  ];

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          Our Work
        </h2>
        <p className="mb-16 text-center text-lg text-zinc-400">
          Real systems built for real businesses.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
            >
              <div className="mb-3 text-sm font-medium text-zinc-500">
                {project.category}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}