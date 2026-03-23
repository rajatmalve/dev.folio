import { Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Have a project idea or want to collaborate? Drop me a message.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl border border-border/50 bg-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <h3 className="font-medium text-sm">Email</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">hello@devfolio.com</p>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin size={16} className="text-primary" />
                      </div>
                      <h3 className="font-medium text-sm">Location</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    <p className="text-xs text-muted-foreground mt-1">Available for remote work worldwide</p>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card">
                    <h3 className="font-medium text-sm mb-3">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Typically within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
