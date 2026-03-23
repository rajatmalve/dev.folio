import { Link } from "react-router-dom";
import { ArrowRight, Code2, Zap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import ProjectGallery from "@/components/ProjectGallery";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(38_92%_50%/0.06),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="fx-blob fx-blob-1" />
          <div className="fx-blob fx-blob-2" />
          <div className="fx-blob fx-blob-3" />
        </div>
        <div className="container relative">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="max-w-2xl">
              <ScrollReveal delay={0}>
                <span className="inline-block text-xs font-mono font-medium text-primary tracking-wider uppercase mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                  Available for projects
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
                  Building digital
                  <br />
                  <span className="text-gradient">experiences</span> that
                  <br />
                  matter.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Full-stack developer specializing in React, TypeScript, and modern web technologies. I turn complex problems into elegant solutions.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/projects">
                      View Projects
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero image */}
            <ScrollReveal delay={250} direction="right">
              <div className="mt-10 md:mt-0">
                <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl overflow-hidden p-6 glow-border">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-secondary relative">
                    <img
                      src="/placeholder.svg"
                      alt="Creative studio preview"
                      className="absolute inset-0 h-full w-full object-cover opacity-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(38_92%_50%/0.20),transparent_60%)]" aria-hidden />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["UI/UX", "React", "Performance", "Design Systems"].map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick services */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: "Web Development", desc: "Custom web applications built with modern frameworks and best practices." },
              { icon: Zap, title: "Performance", desc: "Optimized for speed with lazy loading, code splitting, and efficient rendering." },
              { icon: Palette, title: "UI/UX Design", desc: "Clean, intuitive interfaces designed with user experience as the priority." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group p-8 rounded-xl border border-border/50 bg-card card-hover">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      {/* Featured projects */}
      <section className="py-24 border-t border-border/30">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Featured <span className="text-gradient">Projects</span>
                </h2>
                <p className="mt-3 text-muted-foreground">A selection of recent work.</p>
              </div>
              <Button variant="ghost" asChild className="hidden sm:inline-flex text-muted-foreground hover:text-primary">
                <Link to="/projects">
                  View all
                  <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          <ProjectGallery limit={3} showFilter={false} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
