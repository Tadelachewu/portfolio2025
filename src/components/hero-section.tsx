
import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import type { Section } from "@/app/page";

interface HeroSectionProps {
  setActiveSection: (section: Section) => void;
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  return (
    <section id="home" className="container flex flex-col items-center justify-center flex-1 text-center py-20">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">
          Tadele Mesfin Belay
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-6">
          Software Developer
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          “Building full-stack and AI-powered solutions with React, Express, and SQL Server.”
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            {/* The resume link is a placeholder */}
            <a href="https://archive.org/services/img/my-cv_merged" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={() => setActiveSection('contact')}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
