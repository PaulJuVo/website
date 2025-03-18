
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpIcon, Code, Phone, Mail } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Initial page load animation */}
      <div className="fixed inset-0 bg-black z-[100] animate-fade-out pointer-events-none"></div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fade-out {
          animation: fade-out 0.8s ease-in-out forwards 0.2s;
        }
      `}} />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <Experience />

        <Projects />
        
        <AnimatedSection id="contact" className="bg-black">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="space-y-8">
              <div className="flex items-center gap-2 opacity-90">
                <Phone size={20} className="text-white/70" />
                <h2 className="text-2xl font-medium">contact</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Interested in working together? Feel free to reach out through email
                    or connect with me on social media.
                  </p>
                  
                  <a
                    href="mailto:contact@example.com"
                    className="flex items-center gap-2 text-white hover:text-primary/90 transition-colors"
                  >
                    <Mail size={18} />
                    <span>contact@example.com</span>
                  </a>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-6 border border-white/5">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-white text-background font-medium rounded-md px-4 py-2 transition-all hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <footer className="bg-background py-8 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Paul Vogt. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-white text-background z-50 shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUpIcon size={20} />
      </button>
    </div>
  );
};

export default Index;
