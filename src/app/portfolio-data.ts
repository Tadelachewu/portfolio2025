
import { CodeXml, Smartphone, Server, ServerCog, Database, Flame, Container, GitBranch, Briefcase, GraduationCap, Building, Star, Award, Bot, MousePointerClick, AppWindow } from 'lucide-react';

export const aboutMe = "Passionate developer aiming to become a Computer Scientist specializing in Cybersecurity, AI, and Full-Stack Development. With a strong foundation in modern web technologies and a drive for continuous learning, I am dedicated to building efficient, scalable, and secure applications. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of technology.";

export const skills = [
  { category: "Frontend", items: ["React", "React Native", "Flutter", "Qwik.js", "Next.js", "Streamlit", "Typescript"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "Flask", "Django", "FastAPI"] },
  { category: "Database", items: ["MongoDB", "SQL Server", "PostgreSQL", "MySQL", "Oracle"] },
  { category: "Other", items: ["Firebase", "Docker", "Git", "Python", "AI", "Telegram Bot", "Playwright", "MCP", "AI-Powered Development"] }
];

export const projects = [
  {
    title: "AI Scientific Calculator (Web)",
    description: "Full-stack Next.js web version of the AI Scientific Calculator: a scientific calculator for direct local calculations plus an AI assistant where an LLM (via OpenRouter) picks from 11 MCP calculator tools, the server executes them, and the answer is based on the tool results. It also serves as the API for the Flutter app.",
    tech: ["Next.js", "TypeScript", "MCP", "OpenRouter", "AI", "Tailwind CSS"],
    github: "https://github.com/Tadelachewu/McpAi",
    live: "https://mcpai-76u1.onrender.com/",
    image: "ai-calculator-web"
  },
  {
    title: "AI Scientific Calculator (Mobile)",
    description: "Flutter mobile app with a full scientific calculator and an AI chat mode: ask math questions in plain language and the AI picks from MCP-based calculator tools on a Next.js API, runs them, and answers from the tool results.",
    tech: ["Flutter", "Dart", "Next.js", "MCP", "AI", "Tool Calling"],
    github: "https://github.com/Tadelachewu/FlutterMcpAi",
    live: "https://github.com/Tadelachewu/FlutterMcpAi/tags",
    liveLabel: "Download APK",
    web: "https://mcpai-76u1.onrender.com/",
    image: "ai-scientific-calculator"
  },
  {
    title: "Flutter Portfolio App",
    description: "Mobile version of my portfolio built with Flutter, showcasing projects, education and contact details, with an in-app contact form that sends messages through my Next.js emailing API (POST /api/contact) deployed on Vercel.",
    tech: ["Flutter", "Dart", "Next.js", "Email API", "Vercel"],
    github: "https://github.com/Tadelachewu/FlutterPortfolio",
    live: "https://github.com/Tadelachewu/FlutterPortfolio/tags",
    web: "https://emailsendserapp.vercel.app/",
    webLabel: "Email API",
    liveLabel: "Download APK",
    image: "flutter-portfolio-app"
  },
  {
    title: "AI CV Generator",
    description: "A Telegram bot that uses AI to generate professional CVs.",
    tech: ["AI", "Python", "Telegram Bot", "PostgreSQL"],
    github: "https://github.com/Tadelachewu/ai_real_cv_generator.git",
    live: "https://t.me/MertuCv_bot",
    image: "cv-generator"
  },
  {
    title: "RAG Chat Bot",
    description: "Knowledge-base RAG chatbot that accepts one or more documents, stores them in a Chroma vector DB, and answers user queries; replies 'Not found' when no relevant answer exists.",
    tech: ["Python", "FastAPI", "python-telegram-bot", "RAG", "Chroma (Vector DB)"],
    github: "https://github.com/Tadelachewu/My_Rag_Bot.git",
    live: "https://t.me/Ragchabott_bot",
    image: "rag-chat-bot"
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
    title: "NIB Chatbot",
    description: "Customer-facing chatbot deployed for NIB Bank.",
    tech: ["Chatbot", "Web"],
    github: "#",
    live: "https://nibterachatboat.nibbank.com.et/",
    image: "nib-chatbot"
  },
  {
    title: "NIB Procurement System",
    description: "Procurement management system used by NIB Bank.",
    tech: ["Procurement", "Enterprise", "Web"],
    github: "#",
    live: "https://nibprocure.nibbank.com.et/",
    image: "nib-procure"
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

export type Experience = {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skills?: string[];
  logoUrl?: string;
};

export const experience: Experience[] = [
  {
    role: "Junior Software Engineer",
    company: "NIB Bank (Technical Program Department)",
    duration: "2025 – Present",
    responsibilities: ["USSD app API integration", "Database scripting", "Deployment", "Web app and API development", "Mobile app development with Flutter", "AI tool-calling integrations using MCP", "Business ideas"],
    skills: ["NestJS", "Next.js", "Flutter", "MCP", "AI", "SQL", "REST APIs"],
    logoUrl: "/images/nib-bank-emblem.png"
  },
  {
    role: "Junior IT Officer",
    company: "ET Inclusive Finance Technology (ETIFT)",
    duration: "2025",
    responsibilities: ["Database management and optimization", "Providing comprehensive IT support to staff", "Remote desktop troubleshooting and assistance"],
    logoUrl: "https://images.unsplash.com/photo-1687523327554-fa9f50423489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NTkwODM4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export type Education = {
  degree: string;
  institution: string;
  // Degree-only fields; trainings and certifications leave them out.
  cgpa?: string;
  exitExam?: string;
  year: string;
  details?: string[];
  logoUrl?: string;
};

export const education: Education[] = [
    {
      degree: "BSc in Computer Science",
      institution: "Bahir Dar University",
      cgpa: "3.78",
      exitExam: "76%",
      year: "Graduated 2023",
      logoUrl: "https://archive.org/services/img/bdu_20250925"
    },
    {
      degree: "Agile Certified Practitioner (ACP) Training",
      institution: "ITSC Technology Support Training Center",
      year: "September 14 – 19, 2026",
      logoUrl: "/images/itsc-logo.png",
      details: [
        "Intensive 6-day, full-day program (8:00 AM – 5:00 PM)",
        "Nominated as one of the selected IT professionals, with the training identified as a key requirement for my role",
        "Focused on Agile practices under the Agile Certified Practitioner (ACP) theme"
      ]
    }
  ];

export type PostSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  title: string;
  date: string;
  tags: string[];
  description: string;
  imageUrl: string;
  originalImageUrl?: string;
  slug: string;
  content?: PostSection[];
  sources?: { label: string; url: string }[];
};

export const posts: Post[] = [
  {
    title: "This Week in Security: Critical PHP, Node.js, Python and Next.js Patches",
    date: "2026-10-25",
    tags: ["Security", "PHP", "Node.js", "Python", "Next.js"],
    description: "October 2026 brought critical remote code execution fixes for PHP, ten CVEs patched in Node.js, expedited Python releases after a CA compromise, and an out-of-band Next.js update. Here is what changed and which versions to run.",
    imageUrl: "/images/posts/security-week-oct-2026.png",
    originalImageUrl: "/images/posts/security-week-oct-2026.png",
    slug: "security-week-october-2026",
    content: [
      {
        paragraphs: [
          "Several of the runtimes most of us deploy every day shipped security releases within the same week. If you run PHP, Node.js, Python or Next.js in production, this is a patch-now week. Below is a summary of each advisory, the fixed versions, and the practical steps I recommend.",
        ],
      },
      {
        heading: "PHP: two critical remote code execution flaws (CVE-2026-109618, CVE-2026-109619)",
        paragraphs: [
          "On 21 October 2026 the PHP project released 8.5.12, 8.4.27, 8.3.36 and 8.2.35 to fix two vulnerabilities rated CVSS v4.0 9.2 that can allow unauthenticated remote code execution. CVE-2026-109618 is caused by out-of-memory handling interrupting PHP while request data is only partially initialized; CVE-2026-109619 lets request-owned state survive after its memory has been freed, so a later request on the same worker can use it.",
          "The PHP team considers the risk highest for mod_php, where an unauthenticated request can trigger the attack before any application code runs. Details leaked publicly ahead of the planned disclosure, so treat this as urgent.",
        ],
        bullets: [
          "Upgrade to 8.5.12, 8.4.27, 8.3.36 or 8.2.35. The PHP team states that updating is the only safe choice.",
          "If you cannot upgrade immediately, the advisory's interim mitigations include setting session.upload_progress.enabled=0 in php.ini or the FPM pool (then restarting every worker) and tightening memory_limit and post_max_size.",
          "PHP 8.1 and older no longer receive official releases, and PHP 8.2 reaches end of life on 31 December 2026, so plan the move to a supported branch.",
          "The flaws are in PHP itself, so upgrading PHP is what fixes them; updating your application or CMS alone is not enough.",
        ],
      },
      {
        heading: "Node.js: ten CVEs fixed, including a Brotli memory corruption bug",
        paragraphs: [
          "Node.js published security releases on 21 October 2026: v26.12.1, v24.22.1 and v22.23.4. They fix ten CVEs, four of them rated High.",
        ],
        bullets: [
          "CVE-2026-111497 (High): an out-of-bounds write in the Brotli decoder in node:zlib that permits remote code execution.",
          "CVE-2026-105483 and CVE-2026-106069 (High): TLS hostname verification bypasses using fullwidth-digit or leading-zero IPv4 literals.",
          "CVE-2026-105482 (High): dns.resolve*() and dns.reverse() truncate names that contain a NUL character.",
          "Six further Medium and Low issues cover HTTP keep-alive handling, certificate SAN matching, snapshot randomness and the Permission Model.",
          "The releases also update c-ares, Undici, OpenSSL and the bundled CA store, which removes the compromised eMudhra intermediate CA.",
          "Node.js 20 and older are end-of-life and will not receive these fixes. Upgrade to 22.x, 24.x or 26.x.",
        ],
      },
      {
        heading: "Python: security releases and the eMudhra / emSign CA incident",
        paragraphs: [
          "On 1 October 2026 Python 3.10.22, 3.11.17, 3.12.15, 3.13.16 and 3.14.8 shipped with fixes for several CVEs, including CVE-2026-19445 (a crash in ssl when an SNI callback switches contexts), CVE-2026-19553 (argument validation in SSLContext.wrap_bio()), CVE-2026-15310 (bounded zipfile decompression) and CVE-2026-19672 (tarfile extraction filters creating directories outside the destination). Python 3.10.22 is the final release of the 3.10 series.",
          "On 21 October 2026 Python 3.15.1, 3.14.9 and a special 3.13.17 followed as expedited releases. They bundle pip 26.2.2, which includes certifi 2026.10.19 to respond to the eMudhra / emSign certificate authority security incident.",
        ],
        bullets: [
          "Upgrade to the latest patch release of your Python series.",
          "Existing virtual environments keep their old pip and certifi: run python -m pip install --upgrade pip certifi in each one, and update uv as well.",
          "If you are still on Python 3.10, it is now end-of-life; move to 3.12 or newer.",
        ],
      },
      {
        heading: "Next.js: out-of-band update for two critical issues",
        paragraphs: [
          "On 14 October 2026 Vercel released next@16.4.1 and next@15.5.28. The update fixes an unauthenticated remote code execution in 'use cache' functions that return typed arrays (GHSA-673q-mjm6-r5xr), an unauthenticated remote code execution in the Image Optimization API when handling SVG on glibc-based Linux (CVE-2026-96889), and a CPU-exhaustion denial of service in App Router Server Actions (GHSA-p3m5-59mp-jv5r).",
        ],
        bullets: [
          "Upgrade to next@16.4.1 or next@15.5.28.",
          "For the image optimization issue, ensure the sharp version used by Next.js is 0.35.5 or later.",
          "Apps that use only the Pages Router, or no Server Actions, are not affected by the denial-of-service issue.",
        ],
      },
      {
        heading: "My checklist for this week",
        bullets: [
          "Inventory every runtime you run: servers, containers, CI images and serverless functions, not only your laptop.",
          "Patch internet-facing PHP and Next.js workloads first; they carry the remote code execution risk.",
          "Rebuild container images rather than patching running containers, and redeploy.",
          "Refresh CA bundles (certifi, the Node.js CA store, OS trust stores) after the eMudhra incident.",
          "Subscribe to the official security announcement channels for each runtime so the next advisory reaches you on day one.",
        ],
      },
    ],
    sources: [
      { label: "PHP: 8.5.12, 8.4.27, 8.3.36 and 8.2.35 security releases", url: "https://www.php.net/archive/2026.php#2026-10-21-5" },
      { label: "Node.js: Wednesday, October 21, 2026 Security Releases", url: "https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" },
      { label: "Python: 3.15.1, 3.14.9 and 3.13.17 are out", url: "https://blog.python.org/2026/10/python-3151-3149-31317/" },
      { label: "Python: 3.10.22, 3.11.17, 3.12.15, 3.13.16 and 3.14.8", url: "https://blog.python.org/2026/10/python-31022-31117/" },
      { label: "Next.js Security Update: October 14, 2026", url: "https://nextjs.org/blog/nextjs-security-update-october-14-2026" },
    ],
  },
  {
    title: "Ethiopia Inaugurates the Grand Ethiopian Renaissance Dam",
    date: "2026-10-25",
    tags: ["Ethiopia", "Energy", "GERD"],
    description: "After more than a decade of construction, the Grand Ethiopian Renaissance Dam was officially inaugurated on 9 September 2025. With a design capacity of about 5,150 MW, it is Africa's largest hydroelectric project.",
    imageUrl: "/images/posts/gerd-dam.png",
    originalImageUrl: "/images/posts/gerd-dam.png",
    slug: "gerd-inaugurated",
    content: [
      {
        paragraphs: [
          "On 9 September 2025 Prime Minister Abiy Ahmed officially inaugurated the Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile, following the announcement in July 2025 that construction and reservoir filling were complete. Construction began in 2011, and the ceremony was attended by leaders from across Africa and the Caribbean.",
        ],
      },
      {
        heading: "Why it matters",
        bullets: [
          "Scale: with a design capacity of about 5,150 MW, GERD is the largest hydroelectric project in Africa.",
          "Access to electricity: the dam is central to Ethiopia's plan to expand electrification at home, where millions of people still lack a reliable supply.",
          "Regional energy trade: Ethiopia aims to export power to neighbouring countries and become a regional energy hub.",
          "National ownership: the project was financed largely from domestic sources, including bonds bought by Ethiopian citizens at home and abroad, with total cost estimates of around US$4–5 billion.",
        ],
      },
      {
        heading: "The regional context",
        paragraphs: [
          "Egypt and Sudan, the downstream countries, continue to object to the dam being filled and operated without a binding agreement, and diplomatic efforts on water sharing are ongoing. How the three countries coordinate on the Nile will shape the region for decades.",
          "For me, as an Ethiopian engineer, GERD is a reminder of what long-term, locally owned infrastructure can achieve. Reliable power is also the foundation the country's digital and technology sector will be built on.",
        ],
      },
    ],
  },
  {
    title: "The Future of Web Development with AI",
    date: "2026-10-25",
    tags: ["Web Dev", "Next.js", "AI"],
    description: "AI is changing both how we build web applications and what those applications can do. A practical look at AI-assisted development, server-first frameworks and tool-calling interfaces.",
    imageUrl: "/images/posts/future-of-web-dev.png",
    originalImageUrl: "/images/posts/future-of-web-dev.png",
    slug: "future-of-web-dev",
    content: [
      {
        paragraphs: [
          "AI is reshaping web development on two fronts at once: the way we write software, and the kind of software users now expect. Here is how I see the shift, based on the projects I have been building.",
        ],
      },
      {
        heading: "1. AI-assisted development is the new baseline",
        paragraphs: [
          "Coding assistants now draft components, write tests and explain unfamiliar code. The developer's job moves towards defining the problem precisely, reviewing generated code critically and owning architecture, security and performance. Teams that pair AI speed with strong code review get the benefit without the risk.",
        ],
      },
      {
        heading: "2. Server-first frameworks fit AI workloads",
        paragraphs: [
          "Frameworks like Next.js with the App Router run logic on the server by default. That suits AI features well: API keys stay on the server, responses can be streamed to the browser, and expensive model calls can be cached.",
        ],
      },
      {
        heading: "3. From chat boxes to tool-calling applications",
        paragraphs: [
          "The most useful AI features do not just generate text; they take actions. With the Model Context Protocol (MCP), a model can choose from well-defined tools, the server executes them, and the answer is grounded in real results. My AI Scientific Calculator works this way: the model picks a calculator tool, the server runs it through MCP, and the reply is based on the tool's output instead of the model's guess.",
        ],
      },
      {
        heading: "What developers should focus on",
        bullets: [
          "Solid fundamentals: HTTP, data modelling, accessibility and performance still decide product quality.",
          "Designing clear APIs and tools that AI agents can call safely.",
          "Security for AI features: validate model output, limit tool permissions and protect against prompt injection.",
          "Measuring quality with evaluations, not just demos.",
        ],
      },
    ],
  },
  {
    title: "Getting Started with Generative AI",
    date: "2026-10-25",
    tags: ["AI", "Python", "RAG"],
    description: "A practical introduction to building with large language models: prompting, retrieval-augmented generation (RAG), tool calling and the habits that turn a demo into a reliable product.",
    imageUrl: "/images/posts/getting-started-genai.png",
    originalImageUrl: "/images/posts/getting-started-genai.png",
    slug: "getting-started-genai",
    content: [
      {
        paragraphs: [
          "Generative AI models produce new text, code or images from a prompt. You do not need to train a model to build useful products with them; most real-world applications combine an existing model with your own data and tools. This is the path I recommend to developers starting out.",
        ],
      },
      {
        heading: "1. Start with prompting",
        paragraphs: [
          "Call a hosted model through its API and learn to write clear instructions: give the model a role, the context it needs, the exact output format, and examples. Small prompt changes often matter more than switching models.",
        ],
      },
      {
        heading: "2. Ground answers in your data with RAG",
        paragraphs: [
          "Models do not know your documents. Retrieval-augmented generation splits documents into chunks, stores their embeddings in a vector database, retrieves the most relevant chunks for each question and passes them to the model. My RAG Chat Bot uses this approach with a Chroma vector database, and it answers 'Not found' when the documents do not contain the answer. That honesty matters more than a confident guess.",
        ],
      },
      {
        heading: "3. Let the model use tools",
        paragraphs: [
          "Tool calling lets a model request actions, such as running a calculation, querying a database or calling an API, which your code executes. Standards like the Model Context Protocol (MCP) make those tools reusable across models and applications.",
        ],
      },
      {
        heading: "4. Build habits for production",
        bullets: [
          "Keep API keys on the server and never in client code.",
          "Validate and sanitise model output before acting on it.",
          "Create a small test set of real questions and measure answers whenever you change prompts or models.",
          "Track cost and latency per request from day one.",
          "Tell users when content is AI-generated and give them a way to report bad answers.",
        ],
      },
    ],
  },
  {
    title: "Cybersecurity Best Practices for Developers",
    date: "2026-10-25",
    tags: ["Cybersecurity", "Development", "Security"],
    description: "Security is part of writing good software, not a final checklist. The core practices every developer should apply, from input validation and authentication to dependency hygiene.",
    imageUrl: "/images/posts/cybersecurity-best-practices.png",
    originalImageUrl: "/images/posts/cybersecurity-best-practices.png",
    slug: "cybersecurity-best-practices",
    content: [
      {
        paragraphs: [
          "Most breaches exploit well-known weaknesses rather than exotic attacks. Working in banking technology has taught me that security is everyone's responsibility, and that a few disciplined habits prevent most incidents. These are the practices I apply on every project, aligned with the OWASP Top 10.",
        ],
      },
      {
        heading: "Validate input and encode output",
        paragraphs: [
          "Treat all input as untrusted, whether it comes from forms, APIs, files or AI models. Use parameterised queries to prevent SQL injection, validate data against a schema, and encode output for its context to prevent cross-site scripting.",
        ],
      },
      {
        heading: "Get authentication and authorisation right",
        bullets: [
          "Use proven libraries or identity providers instead of building your own authentication.",
          "Hash passwords with a modern algorithm such as Argon2 or bcrypt, and support multi-factor authentication.",
          "Check authorisation on the server for every request; hiding a button is not access control.",
          "Apply least privilege to users, services and database accounts.",
        ],
      },
      {
        heading: "Protect secrets and data",
        bullets: [
          "Never commit secrets to source control; use environment variables or a secrets manager, and rotate keys.",
          "Use HTTPS everywhere and encrypt sensitive data at rest.",
          "Log security events without logging passwords, tokens or personal data.",
        ],
      },
      {
        heading: "Keep dependencies and runtimes patched",
        paragraphs: [
          "Your application is only as secure as its dependencies. Use automated tools such as npm audit, pip-audit or Dependabot, follow the security announcements of your language runtimes, and upgrade promptly when critical fixes are released. My weekly security roundup is a good example of why this matters.",
        ],
      },
      {
        heading: "Make security part of the workflow",
        bullets: [
          "Include security checks in code review and CI.",
          "Threat-model new features before building them.",
          "Have an incident response plan and practise it.",
        ],
      },
    ],
  },
];

export const skillIcons: { [key: string]: React.ElementType } = {
  "React": CodeXml,
  "React Native": Smartphone,
  "Flutter": Smartphone,
  "Qwik.js": CodeXml,
  "Node.js": Server,
  "Express": ServerCog,
  "NestJS": ServerCog,
  "MCP": Bot,
  "AI-Powered Development": Bot,
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
