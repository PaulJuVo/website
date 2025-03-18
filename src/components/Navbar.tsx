import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Determine which section is currently in view
      const sections = ["home", "experience", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with a small buffer to trigger earlier)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { label: "about", sectionId: "home" },
    { label: "experience", sectionId: "experience" },
    { label: "projects", sectionId: "projects" },
    { label: "contact", sectionId: "contact" },
  ];

  const renderNavItems = (onClick?: () => void) => (
    <>
      {navItems.map((item) => (
        <NavItem
          key={item.sectionId}
          label={item.label}
          sectionId={item.sectionId}
          isActive={activeSection === item.sectionId}
          onClick={() => {
            scrollToSection(item.sectionId);
            if (onClick) onClick();
          }}
        />
      ))}
    </>
  );

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container flex justify-between items-center">
        {isMobile ? (
          <>
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
                  <Menu className="text-white" size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background border-r border-white/10">
                <div className="p-4">
                  <ul className="flex flex-col space-y-2 py-4">
                    {renderNavItems(() => {
                      const closeButton = document.querySelector('[data-state="open"] [aria-label="Close"]');
                      if (closeButton instanceof HTMLElement) {
                        closeButton.click();
                      }
                    })}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
            <div className="mx-auto">
            </div>
            <div className="w-10"></div> {/* Spacing element for centering */}
          </>
        ) : (
          <ul className="flex items-center space-x-2 border border-white/10 rounded-full py-1 px-1 backdrop-blur-sm bg-black/30 mx-auto">
            {renderNavItems()}
          </ul>
        )}
      </div>
    </nav>
  );
};

interface NavItemProps {
  label: string;
  sectionId: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ label, sectionId, isActive, onClick }: NavItemProps) => {
  const isMobile = useIsMobile();
  
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          "px-4 py-2 text-sm font-regular transition-all duration-300 rounded-full",
          isMobile
            ? "w-full text-left" 
            : "",
            isActive
            ? "bg-[linear-gradient(122deg,#927AFF_16.11%,#0051FF_108.71%)] text-white"
            : "text-white/80 hover:text-white hover:bg-white/10"
        )}
      >
        {label}
      </button>
    </li>
  );
};

export default Navbar;
