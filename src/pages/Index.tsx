
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
        
        <Experience className="mt-12 mb-24"/>

        <Projects className="mt-24 mb-12"/>
        
        <AnimatedSection id="contact" className="bg-black mt-32 mb-32">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="space-y-8 flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 opacity-90">
                <Phone size={20} className="text-white/70" />
                <h2 className="text-2xl font-medium">contact</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Feel free to reach out through email or connect with me on social media.
                  </p>
                  
                  <a
                    href="mailto:hi@paulvogt.xyz"
                    className="flex justify-center items-center gap-2 text-white hover:text-primary/90 transition-colors"
                  >
                    <Mail size={18} />
                    <span>hi@paulvogt.xyz</span>
                  </a>
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
