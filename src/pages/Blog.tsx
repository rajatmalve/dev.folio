import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    title: "Building Performant React Apps in 2026",
    excerpt: "Exploring React Server Components, concurrent features, and modern patterns for fast web applications.",
    date: "Mar 15, 2026",
    readTime: "8 min",
    tag: "React",
  },
  {
    title: "Type-Safe APIs with tRPC and Zod",
    excerpt: "How to build end-to-end type-safe APIs that catch errors at compile time, not in production.",
    date: "Feb 28, 2026",
    readTime: "6 min",
    tag: "TypeScript",
  },
  {
    title: "The Art of CSS Architecture",
    excerpt: "Design tokens, utility-first CSS, and building scalable style systems for large applications.",
    date: "Feb 10, 2026",
    readTime: "5 min",
    tag: "CSS",
  },
  {
    title: "PostgreSQL Tips for Web Developers",
    excerpt: "Indexing strategies, JSON columns, and query optimization techniques every developer should know.",
    date: "Jan 22, 2026",
    readTime: "7 min",
    tag: "Database",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Thoughts on development, design, and the modern web.
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-4">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 100}>
                <article className="group rounded-xl border border-border/50 bg-card p-6 sm:p-8 card-hover cursor-pointer">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                          {post.tag}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      <p className="mt-3 text-xs text-muted-foreground">{post.date}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground group-hover:text-primary shrink-0 self-start">
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
