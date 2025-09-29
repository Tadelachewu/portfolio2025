
import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import type { Section } from "@/app/page";

interface HeroSectionProps {
  setActiveSection: (section: Section) => void;
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  const handleContactClick = () => {
    setActiveSection('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="container flex flex-col items-center justify-center flex-1 text-center py-24 md:py-32">
      <div className="animate-fade-in-up space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
          Tadele Mesfin Belay
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-foreground">
          Software Developer
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          Building full-stack and AI-powered solutions with a passion for creating efficient, scalable, and secure applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="https://archive.org/download/resume-example-sde/SDE-Resume-Example.pdf" download="Tadele-Mesfin-Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={handleContactClick}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
