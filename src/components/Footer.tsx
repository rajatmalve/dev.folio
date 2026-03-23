import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight">
              <span className="text-gradient">dev</span>
              <span className="text-foreground">.folio</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Crafting digital experiences with modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-surface-hover text-muted-foreground hover:text-primary transition-all duration-200 active:scale-95"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 dev.folio — Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
