
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/PaulJuVo",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/paul-vogt1/",
    },
    // <!-- Add Twitter and Facebook social links -->
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   url: "https://twitter.com",
    // },
    // {
    //   name: "Facebook",
    //   icon: Facebook,
    //   url: "https://facebook.com",
    // },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-white transition-colors duration-300"
          aria-label={social.name}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
