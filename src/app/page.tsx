
'use client';

import { useState, useEffect } from 'react';
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
import { skills as initialSkills, projects as initialProjects, experience as initialExperience, education as initialEducation, posts as initialPosts, skillIcons as initialSkillIcons, aboutMe as initialAboutMe } from '@/app/portfolio-data';
import { useAuth } from '@/hooks/use-auth';
import LoginComponent from '@/components/login-component';

export type Section = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'posts' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [skills, setSkills] = useState(initialSkills);
  const [skillIcons, setSkillIcons] = useState(initialSkillIcons);
  const [projects, setProjects] = useState(initialProjects);
  const [experience, setExperience] = useState(initialExperience);
  const [education, setEducation] = useState(initialEducation);
  const [posts, setPosts] = useState(initialPosts);
  const [aboutMe, setAboutMe] = useState(initialAboutMe);
  const { isAdmin, setIsAdmin } = useAuth();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 flex flex-col">
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection aboutMe={aboutMe} setAboutMe={setAboutMe} />
        <SkillsSection skills={skills} setSkills={setSkills} skillIcons={skillIcons} setSkillIcons={setSkillIcons} />
        <ProjectsSection projects={projects} setProjects={setProjects} />
        <ExperienceSection experience={experience} setExperience={setExperience} />
        <EducationSection education={education} setEducation={setEducation} />
        <PostSection posts={posts} setPosts={setPosts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
