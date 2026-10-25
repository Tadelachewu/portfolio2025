'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import type { Section } from "@/app/page";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

interface HeroSectionProps {
  setActiveSection: (section: Section) => void;
}

const LINKEDIN_URL = "https://www.linkedin.com/in/tadele-mesfin-belay";

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  const [profilePic, setProfilePic] = useState<ImagePlaceholder | undefined>(
    PlaceHolderImages.find(p => p.id === 'profile-picture')
  );

  // Pick up a profile picture changed by the admin (stored the same way the header reads it).
  useEffect(() => {
    try {
      const stored = localStorage.getItem('placeholderImages');
      if (stored) {
        const pic = (JSON.parse(stored) as ImagePlaceholder[]).find(p => p.id === 'profile-picture');
        if (pic) setProfilePic(pic);
      }
    } catch {
      // keep the default picture
    }
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.3] [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_65%)]"
      />
      <div className="container grid items-center gap-12 pt-20 pb-16 md:pt-28 md:pb-24 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-32 lg:pb-28">
        <div className="animate-fade-in-up order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-primary-ink sm:text-sm">
            Software Engineer
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl xl:text-6xl">
            Hello, my name is <span className="text-primary-ink">Tadele Mesfin</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            I build full-stack web apps, Flutter mobile apps and AI-powered tools that are efficient, scalable and secure.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => setActiveSection('projects')}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-foreground/70" asChild>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-muted-foreground" asChild>
              <a href="/cv/Tadele_Mesfin_CV.pdf" download="Tadele_Mesfin_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-fade-in order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-square w-64 sm:w-80 lg:w-[26rem] xl:w-[30rem]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-3 rounded-[58%_42%_38%_62%/52%_46%_54%_48%] bg-primary motion-safe:animate-blob"
            />
            <div
              aria-hidden="true"
              className="absolute -left-4 bottom-6 h-16 w-16 rounded-full bg-accent/80 sm:h-20 sm:w-20"
            />
            {profilePic && (
              <div className="absolute inset-3 overflow-hidden rounded-[42%_58%_62%_38%/44%_58%_42%_56%] border-4 border-background shadow-2xl motion-safe:animate-blob [animation-direction:reverse]">
                <Image
                  src={profilePic.imageUrl}
                  alt={profilePic.description}
                  fill
                  priority
                  sizes="(min-width: 1280px) 480px, (min-width: 1024px) 416px, 320px"
                  className="object-cover object-[50%_18%] scale-[1.35] origin-[50%_22%]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
