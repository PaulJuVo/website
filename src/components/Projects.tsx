import { Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
  const projects = [
    {
      title: "syly",
      description: "reactions 🤣 from friends 🙌 on memes",
      image: "syly.png", // Hier dein Bildpfad
      url: "https://www.syly.app", // Link zu der Webseite des Projekts
    },
    {
      title: "Offenstall am Wald",
      description: "Website",
      image: "offenstallamwald.png", // Hier dein Bildpfad
      url: "https://www.offenstallamwald.de", // Link zu der Webseite des Projekts
    }, 
    {
        title: "vents",
        description: "Eventplattform for rural areas",
        image: "vents.png", // Hier dein Bildpfad
        url: "https://www.vents.fun", // Link zu der Webseite des Projekts
      }
  ];

  return (
    <AnimatedSection id="projects" className="bg-black">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex items-center gap-2 opacity-90">
            <Code size={20} className="text-white/70" />
            <h2 className="text-2xl font-medium">my projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background rounded-lg overflow-hidden border border-white/5 transition-all duration-300 hover:border-white/20 hover:translate-y-[-4px]"
              >
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
