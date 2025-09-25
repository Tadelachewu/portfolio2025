
import { CodeXml, Smartphone, Server, ServerCog, Database, Flame, Container, GitBranch, Briefcase, GraduationCap, Building, Star, Award, Bot, MousePointerClick, AppWindow } from 'lucide-react';

export const aboutMe = "Passionate developer aiming to become a Computer Scientist specializing in Cybersecurity, AI, and Full-Stack Development. With a strong foundation in modern web technologies and a drive for continuous learning, I am dedicated to building efficient, scalable, and secure applications. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of technology.";

export const skills = [
  { category: "Frontend", items: ["React", "React Native", "Qwik.js", "Next.js", "Streamlit", "Typescript"] },
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
    image: "application-letter-bot" 
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
    github: "https://github.com/Tadelachewu/youtubeautomation.git",
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
    title: "NIB Data Analysis Bot",
    description: "A Telegram bot that analyzes Excel files and extracts user-specified data columns.",
    tech: ["Python", "Telegram Bot"],
    github: "https://github.com/Tadelachewu/FileFilteringandgenerateexcelfile.git",
    live: "https://t.me/NibDataAnalyst_bot",
    image: "nib-data-bot"
  },
  {
    title: "NIB Security Analyst Bot",
    description: "A Telegram bot for security analysis at NIB, providing alerts and system information.",
    tech: ["Python", "Telegram Bot", "AI"],
    github: "https://github.com/Tadelachewu/SecurityBotSystem.git",
    live: "https://t.me/NIB_SECURITY_bot",
    image: "nib-security-bot"
  },
  {
    title: "Employee Management System",
    description: "Full-stack app with React frontend and Express + SQL Server backend, enabling comprehensive employee data management.",
    tech: ["React", "Express", "SQL Server"],
    github: "https://github.com/Tadelachewu/hrapp.git",
    live: "#",
    image: "employee-management"
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
    year: "Graduated 2023",
    logoUrl: "https://archive.org/services/img/bdu_20250925"
  }
];

export const posts = [
  {
    title: "GERD Nearing Completion, Requires Additional Funding",
    date: "2024-07-29",
    tags: ["Ethiopia", "Development", "GERD"],
    description: "The Grand Ethiopian Renaissance Dam (GERD) is nearing completion but requires an additional 80 billion Birr to be finalized, showcasing a major milestone in national development.",
    imageUrl: "https://picsum.photos/seed/gerd-2/600/400",
    slug: "gerd-nearing-completion"
  },
  {
    title: "The Future of Web Development with AI",
    date: "2024-07-28",
    tags: ["Web Dev", "Next.js", "AI"],
    description: "Exploring the latest trends shaping the future of web development, from server components to AI-driven UIs.",
    imageUrl: "https://picsum.photos/seed/post1/600/400",
    slug: "future-of-web-dev"
  },
  {
    title: "Getting Started with Generative AI",
    date: "2024-07-20",
    tags: ["AI", "Python", "Genkit"],
    description: "A beginner-friendly guide to understanding and implementing generative AI models in your own projects.",
    imageUrl: "https://picsum.photos/seed/post2/600/400",
    slug: "getting-started-genai"
  },
  {
    title: "Cybersecurity Best Practices for Developers",
    date: "2024-07-15",
    tags: ["Cybersecurity", "Development", "Security"],
    description: "Essential security practices that every developer should know to build more secure and resilient applications.",
    imageUrl: "https://picsum.photos/seed/post3/600/400",
    slug: "cybersecurity-best-practices"
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
  "Typescript": CodeXml
};

export const educationIcons = {
    degree: GraduationCap,
    institution: Building,
    cgpa: Star,
    exitExam: Award
}

export const contactInfo = {
    email: 'tade2024bdu@gmail.com',
    phone: '+251949847581'
}
