
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface ExperienceProps {
  className?: string;
}

const Experience = ({ className }: ExperienceProps) => {
  const experiences = [
    {
      company: "Mercedes-Benz Group AG",
      logo: <img
      src="Mercedes-Benz-Logo.png" // Ersetze dies mit der URL deines Bildes
      alt="Profile"
      className="w-full h-full object-cover"
    />,
      position: "Automotive Intelligence - Internship",
      duration: "09/2024 - 02/2025",
      //companyType: "Tech Firm",
      //website: "mercedes-benz.com",
      description:
        "Analyzed global sales markets for Mercedes-Benz Cars and Vans and managed data in Microsoft Azure, ensuring quality and regular updates for key markets. I developed Power BI dashboards and automated data processes with PySpark, significantly increasing efficiency.",
    },
  ];

  return (
    <AnimatedSection 
      id="experience" 
      className={cn("bg-black", className)}
      animation="fade-in"
    >
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 opacity-90">
              <Briefcase size={20} className="text-white/70" />
              <h2 className="text-2xl font-medium">my experience</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={exp.company}
                animation="slide-up"
                delay={index * 200}
                className="bg-secondary/50 rounded-lg p-6 border border-white/5"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="flex items-center gap-4 md:flex-col">
                      <div className="flex-shrink-0 w-52 h-52 rounded flex items-center justify-center">
                        <span className="font-bold">{exp.logo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-center h-full">
                    <div>
                      {/* Company Name */}
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between md:mb-4">
                      {/* Position */}
                      <h4 className="font-semibold text-white/50 text-lg mt-2 md:mt-0">{exp.company}</h4>

                      {/* Duration */}
                      <span className="text-muted-foreground text-sm md:text-base mt-1 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
