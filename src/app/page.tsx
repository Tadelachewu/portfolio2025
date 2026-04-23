
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
  const { isAdmin } = useAuth();

  // For SPA behavior we no longer auto-detect sections by scroll.
  // Navigation will control which single section is rendered.

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 flex flex-col items-center w-full">
        {activeSection === 'home' && (
          <div className="w-full">
            <HeroSection setActiveSection={setActiveSection} />
          </div>
        )}

        {activeSection === 'about' && (
          <div className="w-full">
            <AboutSection aboutMe={aboutMe} setAboutMe={setAboutMe} />
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="w-full">
            <SkillsSection skills={skills} setSkills={setSkills} skillIcons={skillIcons} setSkillIcons={setSkillIcons} />
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="w-full">
            <ProjectsSection projects={projects} setProjects={setProjects} />
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="w-full">
            <ExperienceSection experience={experience} setExperience={setExperience} />
          </div>
        )}

        {activeSection === 'education' && (
          <div className="w-full">
            <EducationSection education={education} setEducation={setEducation} />
          </div>
        )}

        {activeSection === 'posts' && (
          <div className="w-full">
            <PostSection posts={posts} setPosts={setPosts} />
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="w-full">
            <ContactSection />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
