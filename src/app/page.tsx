
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
import { skills as initialSkills, projects as initialProjects, experience as initialExperience, education as initialEducation, posts as initialPosts, skillIcons as initialSkillIcons } from '@/app/portfolio-data';

export type Section = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'posts' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [skills, setSkills] = useState(initialSkills);
  const [skillIcons, setSkillIcons] = useState(initialSkillIcons);
  const [projects, setProjects] = useState(initialProjects);
  const [experience, setExperience] = useState(initialExperience);
  const [education, setEducation] = useState(initialEducation);
  const [posts, setPosts] = useState(initialPosts);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection skills={skills} setSkills={setSkills} skillIcons={skillIcons} setSkillIcons={setSkillIcons} />;
      case 'projects':
        return <ProjectsSection projects={projects} setProjects={setProjects} />;
      case 'experience':
        return <ExperienceSection experience={experience} setExperience={setExperience} />;
      case 'education':
        return <EducationSection education={education} setEducation={setEducation} />;
      case 'posts':
        return <PostSection posts={posts} setPosts={setPosts} />;
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
