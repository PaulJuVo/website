
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left';
  delay?: number;
}

const AnimatedSection = ({
  children,
  className,
  id,
  animation = 'fade-in',
  delay = 0
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "section-padding w-full",
        className,
        isVisible && animation,
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0 
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
