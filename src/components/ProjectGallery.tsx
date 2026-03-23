import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const categories = ["All", "Web App", "Landing Page", "E-Commerce", "API"];

const projects = [
  {
    title: "Meridian Dashboard",
    description: "Real-time analytics platform with interactive data visualizations and team collaboration features.",
    category: "Web App",
    tags: ["React", "TypeScript", "D3.js"],
    image: "linear-gradient(135deg, hsl(200 50% 18%), hsl(220 40% 12%))",
    imageSrc: "",
  },
  {
    title: "Solara Commerce",
    description: "High-performance e-commerce storefront with dynamic product filtering and checkout flow.",
    category: "E-Commerce",
    tags: ["React", "Stripe", "Node.js"],
    image: "linear-gradient(135deg, hsl(38 50% 18%), hsl(28 40% 12%))",
    imageSrc: "",
  },
  {
    title: "Veritas Legal",
    description: "Professional law firm website with case study showcases and appointment scheduling.",
    category: "Landing Page",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "linear-gradient(135deg, hsl(150 30% 16%), hsl(160 25% 10%))",
    imageSrc: "",
  },
  {
    title: "FlowState API",
    description: "RESTful API service for workflow automation with webhook integrations and rate limiting.",
    category: "API",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    image: "linear-gradient(135deg, hsl(270 30% 18%), hsl(260 25% 12%))",
    imageSrc: "",
  },
  {
    title: "Canopy Health",
    description: "Patient management platform with appointment booking, prescriptions, and telehealth features.",
    category: "Web App",
    tags: ["React", "Supabase", "Tailwind"],
    image: "linear-gradient(135deg, hsl(170 40% 16%), hsl(180 35% 10%))",
    imageSrc: "",
  },
  {
    title: "Atlas Maps",
    description: "Interactive mapping application with custom pin layers and geolocation-based search.",
    category: "Web App",
    tags: ["React", "Mapbox", "TypeScript"],
    image: "linear-gradient(135deg, hsl(210 40% 18%), hsl(200 35% 12%))",
    imageSrc: "",
  },
];

interface ProjectGalleryProps {
  limit?: number;
  showFilter?: boolean;
}

const ProjectGallery = ({ limit, showFilter = true }: ProjectGalleryProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {showFilter && (
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <article className="group rounded-xl border border-border/50 bg-card overflow-hidden card-hover">
              <div className="relative h-44 w-full" style={{ background: project.image }}>
                <img
                  src={project.imageSrc}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" aria-hidden />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-2 text-muted-foreground hover:text-primary">
                    <ExternalLink size={14} />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
