import { Code2, Zap, Palette, Server, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Code2, title: "Frontend Development", desc: "React, TypeScript, and modern CSS — responsive, accessible, and fast.", price: "From $3,000" },
  { icon: Server, title: "Backend & APIs", desc: "Node.js, PostgreSQL, REST and GraphQL APIs built for scale.", price: "From $4,000" },
  { icon: Palette, title: "UI/UX Design", desc: "Wireframes to polished interfaces. Design systems and component libraries.", price: "From $2,500" },
  { icon: Zap, title: "Performance Optimization", desc: "Audits, bundle analysis, lazy loading, and rendering optimizations.", price: "From $1,500" },
  { icon: Shield, title: "Security Audits", desc: "Input validation, authentication flows, and vulnerability assessments.", price: "From $2,000" },
  { icon: BarChart3, title: "Analytics & SEO", desc: "Data tracking setup, search engine optimization, and performance monitoring.", price: "From $1,800" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              End-to-end development services tailored to your needs.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="group p-8 rounded-xl border border-border/50 bg-card card-hover h-full flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/20">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                  <p className="mt-4 text-sm font-mono text-primary">{service.price}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">Have a project in mind?</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
