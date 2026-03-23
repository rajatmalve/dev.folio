import ScrollReveal from "./ScrollReveal";

const techItems = [
  { name: "React", icon: "⚛️", color: "from-[hsl(197,71%,53%)] to-[hsl(197,71%,40%)]" },
  { name: "TypeScript", icon: "TS", color: "from-[hsl(211,60%,48%)] to-[hsl(211,60%,35%)]" },
  { name: "JavaScript", icon: "JS", color: "from-[hsl(50,90%,50%)] to-[hsl(50,90%,37%)]" },
  { name: "Vite", icon: "⚡", color: "from-[hsl(270,70%,55%)] to-[hsl(270,70%,42%)]" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-[hsl(188,78%,46%)] to-[hsl(188,78%,33%)]" },
  { name: "Node.js", icon: "🟢", color: "from-[hsl(120,40%,44%)] to-[hsl(120,40%,31%)]" },
  { name: "PostgreSQL", icon: "🐘", color: "from-[hsl(210,50%,45%)] to-[hsl(210,50%,32%)]" },
  { name: "Git", icon: "📦", color: "from-[hsl(12,72%,52%)] to-[hsl(12,72%,39%)]" },
];

const TechStack = () => {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-center max-w-lg mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techItems.map((tech, i) => (
            <ScrollReveal key={tech.name} delay={i * 80}>
              <div className="group relative rounded-xl border border-border/50 bg-card p-6 text-center card-hover cursor-default">
                <div className={`mx-auto w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-lg font-bold mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
