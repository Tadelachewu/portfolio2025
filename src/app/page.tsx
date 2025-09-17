
'use client';

import { useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ExperienceSection from '@/components/experience-section';
import EducationSection from '@/components/education-section';
import PostSection from '@/components/post-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export type Section = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'posts' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'posts':
        return <PostSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 flex flex-col">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}
