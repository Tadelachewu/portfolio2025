import { CodeXml, Smartphone, Server, ServerCog, Database, Flame, Container, GitBranch, Briefcase, GraduationCap, Building, Star, Award, Bot, MousePointerClick, AppWindow } from 'lucide-react';

export const skills = [
  { category: "Frontend", items: ["React", "React Native", "Qwik.js", "Next.js", "Streamlit"] },
  { category: "Backend", items: ["Node.js", "Express", "Flask", "Django", "FastAPI"] },
  { category: "Database", items: ["MongoDB", "SQL Server", "PostgreSQL", "MySQL", "Oracle"] },
  { category: "Other", items: ["Firebase", "Docker", "Git", "Python", "AI", "Telegram Bot", "Playwright"] }
];

export const projects = [
  {
    title: "AI CV Generator",
    description: "A Telegram bot that uses AI to generate professional CVs.",
    tech: ["AI", "Python", "Telegram Bot", "PostgreSQL"],
    github: "https://github.com/Tadelachewu/ai_real_cv_generator.git",
    live: "https://t.me/MertuCv_bot",
    image: "cv-generator"
  },
  {
    title: "Application Letter Bot",
    description: "A Telegram bot that assists in generating application letters.",
    tech: ["Python", "Telegram Bot"],
    github: "https://github.com/Tadelachewu/BotApplicationLetter.git",
    live: "https://t.me/ApplicationLetterByTade_bot",
    image: "data-analyst-app" 
  },
  {
    title: "Online Editor App",
    description: "An AI-powered online code editor built with Next.js for a seamless development experience.",
    tech: ["AI", "Next.js"],
    github: "https://github.com/Tadelachewu/Editorapp.git",
    live: "https://editorapp-r3se2zlre-tadelachewus-projects.vercel.app/",
    image: "online-editor"
  },
  {
    title: "YouTube Automation",
    description: "Generates a video from a user's prompt and automatically uploads it to YouTube.",
    tech: ["Python", "AI", "Playwright"],
    github: "#",
    live: "#",
    image: "youtube-automation"
  },
  {
    title: "NIBPMO Login Automation",
    description: "Automates the login process for NIBPMO using Playwright.",
    tech: ["Python", "Playwright"],
    github: "#",
    live: "#",
    image: "nibpmo-automation"
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
  "PostgreSQL": Database,
  "Firebase": Flame,
  "Docker": Container,
  "Git": GitBranch,
  "Python": CodeXml,
  "AI": Bot,
  "Telegram Bot": Bot,
  "Next.js": CodeXml,
  "Playwright": MousePointerClick,
  "Streamlit": AppWindow,
  "Flask": ServerCog,
  "Django": ServerCog,
  "FastAPI": ServerCog,
  "MySQL": Database,
  "Oracle": Database,
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
