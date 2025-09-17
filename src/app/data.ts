import { CodeXml, Smartphone, Server, ServerCog, Database, Flame, Container, GitBranch, Briefcase, GraduationCap, Building, Star, Award, Bot } from 'lucide-react';

export const skills = [
  { category: "Frontend", items: ["React", "React Native", "Qwik.js", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express"] },
  { category: "Database", items: ["MongoDB", "SQL Server"] },
  { category: "Other", items: ["Firebase", "Docker", "Git", "Python", "AI", "Telegram Bot"] }
];

export const projects = [
  {
    title: "CV and Application Generator",
    description: "An application that uses AI to generate CVs and applications, accessible via a Telegram bot.",
    tech: ["AI", "Python", "Telegram Bot"],
    github: "#",
    live: "#",
    image: "cv-generator"
  },
  {
    title: "Online Editor App",
    description: "An AI-powered online code editor built with Next.js for a seamless development experience.",
    tech: ["AI", "Next.js"],
    github: "#",
    live: "#",
    image: "online-editor"
  },
  {
    title: "Employee Management System",
    description: "Full-stack app with React frontend and Express + SQL Server backend, enabling comprehensive employee data management.",
    tech: ["React", "Express", "SQL Server"],
    github: "#",
    live: "#",
    image: "employee-management"
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with Firebase backend for instant messaging and user authentication.",
    tech: ["React", "Firebase"],
    github: "#",
    live: "#",
    image: "chat-app"
  }
];

export const experience = [
  {
    role: "Junior IT Officer",
    company: "ET Inclusive Finance Technology (ETIFT)",
    duration: "2025 – Present",
    responsibilities: ["Database management and optimization", "Providing comprehensive IT support to staff", "Remote desktop troubleshooting and assistance"]
  },
  {
    role: "IT Trainee",
    company: "NIB Bank (Technical Program Department)",
    duration: "2025",
    responsibilities: ["USSD app API integration", "Database scripting", "Deployment", "Web app and API development", "Business ideas"]
  }
];

export const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Bahir Dar University",
    cgpa: "3.78",
    exitExam: "76%",
    year: "Graduated 2023"
  }
];

export const skillIcons: { [key: string]: React.ElementType } = {
  "React": CodeXml,
  "React Native": Smartphone,
  "Qwik.js": CodeXml,
  "Node.js": Server,
  "Express": ServerCog,
  "MongoDB": Database,
  "SQL Server": Database,
  "Firebase": Flame,
  "Docker": Container,
  "Git": GitBranch,
  "Python": CodeXml,
  "AI": Bot,
  "Telegram Bot": Bot,
  "Next.js": CodeXml,
};

export const educationIcons = {
    degree: GraduationCap,
    institution: Building,
    cgpa: Star,
    exitExam: Award
}

export const contactInfo = {
    email: 'tade2024bdu@gmail.com',
    phone: '+251 912 345678'
}
