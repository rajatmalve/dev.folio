import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import ScrollReveal from "@/components/ScrollReveal";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              A curated collection of work spanning web apps, e-commerce, and APIs.
            </p>
          </ScrollReveal>
          <div className="mt-12">
            <ProjectGallery />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
