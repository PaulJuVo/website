
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div 
      id="home"
      className={cn(
        "min-h-screen flex flex-col justify-center items-center pt-20",
        className
      )}
    >
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="bg-secondary rounded-lg overflow-hidden w-full aspect-square max-w-[300px]">
              {/* Profilbild */}
                <img
                  src="Frame9.png" // Ersetze dies mit der URL deines Bildes
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                <span className="text-muted-foreground">Profile Image</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-muted-foreground fade-in" style={{ animationDelay: '200ms' }}>
                Hi, my name is
              </p>
              <h2 className="text-3xl md:text-4xl font-bold slide-up" style={{ animationDelay: '400ms' }}>
                Paul Vogt
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <p className="text-muted-foreground">
                and I am a Computer Science student from Germany. This is my portfolio, where I present my recent projects.
                </p>
                <p className="text-muted-foreground">
                If you need my help, just send me an email.
                </p>
              </div>
            </div>
            
            <div className="slide-up flex justify-center md:justify-start" style={{ animationDelay: '800ms' }}>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
