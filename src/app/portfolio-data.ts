
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
    logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc0AAABtCAMAAAD08Mp1AAACIlBMVEX///9Xrfb/wBv9/ftKqPZSq/ZPqvZEpvX7/f/T5/z9/fz/vQCkuLmMw/hPqvX/vADs9f7l8f1ptfeezfnC3/uEwfhesfbf7v283Pvm5+v1+v5zufcNIyGu1frO5fykz/p+vfeTx/ltt/cAegAAAAC01/nO4fLY6v0AcgA4ovX9+/T+wSbY5vIAfQCdy/Wbzv/97s/957n+xDf99OD94qz925dOa3f+yE/96sT947D99ub914f+0G79zF/979L93p3/13zC0+I0YzAAUhgMICAgNyLHz9IhPkyYrrCwv8HP19lYfod3lZ3/y0r/3o/87+z3l3398LL2iD3zTgD51cv5z6T3ew71WiL4u5r6ryD1ey70VBv6ulX1ppPzVCn61Tr0bCv1YgDzcUD3pjL7uj/3jxb5w7r8487Xv0/3yYsAf7fay5qhoJ3m28CTemODeXhvptnQysN7jqfFoYKYZzuwpqDZ59iTtZKx0MqNvI1joGPc6dq90bt+pX0lk6jauoy6jWRTnVIGiGzCq5Osf1g7m8sggiR/h43Mk1lWjFYqWig/YUtzj3FNcEceajlJjGp5ppGGqaGKsLzSo3Q2WzRpg2cMTTRdkoZGYkWIlYMAOB0JMCUdVj9JckAAHQBYosAfSSQsaCBaQSomZxlPbiF4VjBlU0GPblF0jSahpIdwhkBLWCQTQACAlmY/TiE2TTNARkFLYVYyUFoAEB0tQUxTeYgJYEYqAAAgAElEQVR4nO2di2Pd1nnYAeE8cC8JXLwBAsbTAa8vRZN6S6asZyWKpCin29p1XddtWbtu69TWauq49ZTU6ZKolu3EbuKmjidPXtR1duMmkb3/b993ANwLXJKSZcuWMt/PFnmJi+f5ne9xvvOAJD2QqGbPie1cSBokQ+PBDp/J4yJqErseJ4QwpuvVP0I4L/LSf9S3NpMHEzPOECMCpJ5XRFkWWZ5Mq23cy53wUd/hTD6hmKmHCslpljqm2g9DwzBN0wjDfugHdsQI05kezYD+KkgSIS2exaYS9srcIqCfZORlMuEksoNhqAzTiDOd6Lb5qO91JveW0iO6zrNECQOXES5rPYfJMnHK2BjFIdHZyLHAzqpOxHVGsuGjvt+Z7C0BYZTIsRKW3qiIe0RWmFsCTVkpes7I90ey7CWaZbiW0w9tSnRezEKix1QSmVAS9ZQE9E7XzEyR8z6hCJMpjgbhkK1Q6oWuU1qM82yoOKDI3J21Wh5DMSJgWfj9mHEK/GLVLUeaAp/wr1LRFMJDh5AgHIUxKcI0zWRHSTBeih/1rc9kWmJGmZf0Y5IpLvCjnlKmqaUUvCwosA1HOQW2HgkDWcm44oxKkxA5UEqqE2tmbh8rCTNCeao4lDs0jpCmY9NhQpQgUmImU63UKQmcni8rWq4wTbGo7jHi2t6wr3FKZur5GEkPWHmGYRGaqQRNq6yHMil7JMqorKPjLGS5YKTQ5MAbmiPfBGvMXD8egv9Uh7pOMvVRP8NMaolBu1IlHQG5QokoRX5cphz+USpT0UQBM0wwb7BC5IIbAc88ppQjxYLdHCUjTJ41Ph8PyQnVh0bp+Z6cjUyfR4oHOGleBh4tbKLFhcwc4jlyWYIRFv+5tmI5yigWe5KsH0AElTzq55gJSMSYpybEyMJhrtia4rq+hYwWibxMci1eAWsraEYrHP6VxJIZ0125n3IlIKC+emSZpk558KifZCYqwMyUnMuMC32TnZhCI5MBQM5iayUPXI0CWvhkR1654gXM8eIVRnSZBgqH9onhhb1REEJQVD7qh/myi2rpRFNW/ZzodmT6LCwIiyI5zymNLR7QRduRXXCY8orLMznLnVHssOWVlWjFBZV2jZh53EeSqVLos9D2EUvESK5kmaNE3IwjJSIFZWSFL4MFjZIg58SyNLsMgqCMVzOPjyjJXQ7K6S1GWqwT08UgiBm2DqeJdDIzto9SIqTgBf7IV3mgyJ5OEi/RXHslAscZ0dwJFenIs1euHDp05dTZ05Jili7hJC+juOCL1LVGjAJFbkMDBhuhOnce9RN9iSVnyIBkSsoUX4/BWRJreeSwRF7hXmkqKNKzc/uEDA5IYsPQZgCUFVHKnGyRFGmZYZNG4GR8lhZ6VALtikjJmExKRQMUnOrpInVkr7RY5iu1SM81NNf69aa+Y3GWO7kjr8SaTMIM8w2gzLYiU33Wif1oZMiprGiijySGRkfmRHK24sgBIZpxRhnTPFLT3LfU0FTWDiYFJzoEuCNHZBcqIaXBdOtRP9aXU1SZ8jAmggOTaeaMAr5iORGxzKP7Bgelmpx6oqZ5RRoDPjs4dCKhOnNjXhaOPBaeDDmzH/WDfSlF07HwxyRwfEGSJRkPTuwHfocadtLhgYA5d6rZ0sctg1NrOQe1XF4hE5oyC1NGZgMSvnhxCMtV3iJBFkelxYvwlKA3Vs7+Uk3z5JjvcfH34EyPxI6nt06BHWmWrs8y8F+0qBScZkTbKLzlnK8e2Fcb1v1S5Sb7SrVh7kxNUzoxqMOiU0teuzoI5bRVCJAe9cN96USDxkRAplBAm7OBuW/umUYXD1XsTqgVXelQvce+wRlJmzqFzP2SkFkz5YsVn+taOE2CJOATG5pj5awM677B4f5UjDtAbbWnTyIrnl486sf7kklB9b6rdzHwIcI6PWiU84jUSR9UDZT+0hjmUfF9Oq3gscnJ55ISehyHk6kPP0Z48MeEhkTsT2HgSdct7tvfF/yko4JfHeROkgnP1ZY4nzoPUTXmfZbHGVYyvTkdPX5Z4NDzHna2pEe0Bz3EgxDIol2YThOyPtNEOZVySs8IfsfFH/215stxiKu4rHMiCiZ8R/o9bMl97k3FqUyEyFObwUOT9EGf83MWU6eUPtxBFw6XWfRgh/QIc5KuShF7kv05WRPbr/RF+gD/nDsrtc3u4OwYpqJ43XpBjFyfVs58RMbCWRTfA6lanW3qDCLcuhfO3ohPxMviT1XItjjJqA7Kk+qU+l57mxTHw7GHiVMEph2c9ze8GahmFwGNJnD60tm5lues0gdVA0U9UDc+n5X6kwOMbsUQyjnlOe2O/lLG9vasu9J0qqbQaO/MxJB0r0CiTxFZp+I26Wr1V4/sVq8mYlV7P8RcplE95rjWqkE0ut8xJtHj7sPLzFBaOPvHa+eIylmlD+YOYgOlbp3MnWrDVKSppg4JtemwtksT99nTCX5K3RxOB9eUP/hYiAejWenmQzW1tW7WsVUgE0rvd0jKeL+bOCDlmbUWoP7SoUnGoL8kPp6Gj9LBwU6Yfen0ie7ZWOoT3n3GHTQB+R53tzvN+/rNHTQhFHjgsOnBaCJO+pAHKwLOBmYY4fXvR1OVddfoJHFocWAwd1SZuEJpreU5hULOrfXh834B87jSAi8dfnawb8rW6n2PdUu+oYmPXyPfS3P2oHm/mHYXmjJ/0Gj/AWliTPuw20093sS0lS+8H82EED/t6Ar3Adjc3DOSOsZZ5dqF55ROgd0dAMGqrTJ3fKKZfWnt2cHcvrmTced8JCkZ61yzpulFUSRXtOhe+b+9aEr3DoYbmiLQqqsMze5TFNPyoDQfloS7fa6f4T6HakxWukFJdqbKtB86II1T61Wzcw4hnpzDzFCdOJg7NO7nBJZnB8LDDta6MVUW8m5XSkWzUtiqc5uOm1V+mnkYOxLZK9I2zSTiXF4VT6dqQqAGGC5+cFGzVZtPLEBDE5pARi+qn480mmPG1TU49aysOYmGo9LUlEz68PakmUcomQrXlDkvKiuRVLeSSMHkdNKw2ljtMcwtAg9WpNV91Jct25cd2hHlhOtFXoKBTcUOmSGZrlaXZS+28dRldV6063lVGMIeg6G1u5kDbowzr6cOj3E+04SymMuDILZqnQBMaczy5KCOluaenVLOfkQ6/Zw1TbtVZLVuDq1qroQQprVopjhZTWYUS0JlYKMpZiUMIj4BEtNjkyoxpln95dbDIapCNbLWNSjsElYngZaAASdx70/TFdfnRujhHrRq4QfiLHCNhIvTiWunYiPHseJ+QSrHAhG2qHbh+N6by5pFc2eUjqDeZvV1JKexLzJhjEJh5tV5MVCXq8JQq8cmQ7ud1KPROPW6b25wdqnJzx4dVMopHQSaz0nC+M7tr2H2paWjg/Fh++aWOvWDOGU3H2TXBA3DTLx6F/FFSdpaTSc0rQYPxdbXRGGbr6UQB91ne9Csc9BVlemRboMYa3R9OhWcE5007/akuSrOQPysUXq8+6CqooGkVjsKN10FhBjjdS5Lcml8WQtHCojLmu1d2LgWgkkJOtoB12juQBqbYEEzZkzpBrT+/n0TmRuHQ6LZCcqJjUz4JWGzZf+S2rCcm2sf9dxq+/KAjZN2sFf7TSqyPOJTBTuZbqpOwBWT++s40waJmMo2aet1aTbmHEEZ0/ERbPPqT4LOpN7tSbOxJ81D0qJNs0EIChmOv+4GmuLLyWVxf6sJdFAxayc/pll2bZ2/F80MItru8x0Y7GvL3L6DIhzqi/BnbklaA5onhCOdW6q+kM50WKJ0jTdRaCeBsKOFQkXbvq6stAlcWjShmOqKi9HvDprMEdfbk2YTdk3A4tJH41289kk+Ac3akVCZNMFW2KYZjx1JVQwYINRj31hTfYudlzWbmp1F4NXTNs2UN+UpojppD5oqYbHTLluWnpkbdNkMrhxAc9vvXwEbe1Rawv4w0U5Zw/an1D8yxXIOTnDYa8PiptYZIDRNk0YiuKkei636RpjTKZosrgcD4olaNOvriJlPdJJ1m6IZj2lWRUazoRHWFV7CPqTWSdi4I2RPmmNVMevroOWZ0KwYoqWodgRFrDWG2eGwpgJ22Opctn58ucq0+Eabpu/U462onzhOr00zpBOa6DbztttEx3r6zKku0cGzmE1AjqicV/YNJDS3ECKBXj6zb64L8tDJg/BNp9HDgpK0M147dVMf33zl/LJpmt4Ydpdm01tAiVcUe+pmOqYZjxE2G6XGNOJJZDjJ/WnWbgzNRFURujSlOuhSaxwsrO9duIKgIdxUoubea5qUQEBb+aUxTWm6hdKiySY0S0b63e4TdJGStHT66PEW0bnBSQiHpLW5fYNn1ta+ugZeE2FK0sH9gxbJ/aeOnl6Co0GTO6aW5iZnrVZU22/WH8d6VrVbqnKc0MStw3vQZFPLZ0zR1CrzWjQ1JhrXmDZNmnVPcj+aWMzubjSry0GrzGsuW1UiapuxVl1sUhPGlx0XGShqtd7AJ6HZ2GdVlKvV70S0WdPgAKIHTx4aNFZ0bu4IwDswOCo999Vfl9QTA2iMSicODcYkDz175LBSkRTS8fqewtsDSpqY1vT9YVlX5KSOBUXgWdvDCU10u/49aE636ado1g/n1vsLr1VrUIvm9EnScZ1CcXbQ9CbgujRrKxKHY7fZGAdogdQPNKE5vmy764PiKT8JzWGLZsa6QRAr2ylXSVo7eHZ/TXRu/0Hgp0r/7J//i99Q1DX4fKVKKQzmjp88sSa1SKJ0krVc8dphULu9Wd8yQKxpZuPiatP070lzx0ooXZpl7bXixs96LVUY02TTid8aQW2/J763ub1oL5pVkVK3UmfSG59KtA0rWGFDc3JZn7U8EJbDJ6FZtiytx9JemyY3lY4A0f7akdqNDq6clvq/8Zv/8rd+/V9BQ+UKUIbtYFzbKtnvd4uiEhJG7QmA7VxQXZRw8+qk8k8SRA1N4540scD2plk2kaff0MTTNRkOqd2k6EitjdX2sC5Od0LT3YtmfVee3bjN5mJFnGcWioe7FdOXDVcnobZMdqPZhGir48fWWlEQZ2UnpNXDfh+I9Nu9Isjn9JnjA6A3OC199Wu//a9/599I0v7BYN/JI4fx1Lh/v4kd1k6fOHL05LNXOm1H4uftbFBtabMSpG6BT2jCLTa+YEKThvemOd110dCMishryod2dbmxHROa012gTRuRZGnchIqieyCYONTdaTaBgfiBZr1Wme4lil0uazpxMQbXplnHB3VfQ94437B5OCj/kJOkk4Xz1g4cXluqrGwlqoq04MPSgecODQ5Kv/s7//bf/fuvHZDOVMZVSF9ZOnzimaNnTx3aN0DoqLRm23GyXkyyaZrYTc2aHBtCalobZf2hHdOq96Y53XcxTh2Ne2lqJairMoujnTR3dICMA+bxbco8HNMUtmV3mm17V5mg+njixmWa5q5sT2g2l821OBmaYVjfO+vqpjU+QWzH41ZBPI6LVTTwxG/n9ah1ZIA89u0/dPzUs2efO/PMwYMHTq+tLS0p4oJLh6X/8Fu/93u//7XfRYZLoIcHz5w9dXz/XA2x1ahZGrVpBg5p9Vjv7N8URiNvyDYdK1oH3L1oTveo7NIjxupsav0X/QQ0kx1nqcZ61+DiPWmGrTKtOhyawYxVDa7WVCq6956KBUbH6bGsSzOf1CySth6jISeqOzG0diTlHm1lWyslq/FeOX7q1NmTR0//5td+/3d++z/+wYFTxw/N1Xq4bxcZnO7oZpy0G5w1zWgCVbTExgiYPe0370OTT3PYSbO2DeNhwzRvEmvtbOqUTI9ApJ76iWg2rZ/mLhFdNznnTGg2PqpbdzBT36bptyYJBZP8JMsrpa1phq0Ly/rq2V3ZjPEOBif+0x/95//yB0tzg90pjvc90b41HWKtHTRZOh5MTUXXiFSP92OZMd1C+Yw0oQHXBGH1PDgq13nEe9KUbN4OzUmVs2rAlXvTnLgvXgc5atZJu5s7aYbt+s/RFLdpSpOhyuhp66Kjuup9GpoigL1y9shpafEPIdZ5BgKdub1VE2i2c3usS3NVDKuEG845WB3GeN1+ViNojzHQIrMa1Od2RmAOxUaedzZ64tOOwU+91qhAOKZoDQtc5XgNz5Cq77CvwqpOstvYZj/j2AmFDXruNY2soLp/BOeKjyOzsxE1iYp+qvYAN6fgpOq9gs3SLpe1mkvB7YnDsmqH2gMElNQ3gn9p4jFkU3pQmqiS+8/+1z+qwh5l4aok8kWh6W/90ZmTz+4XtnjuAWgOHSFD7DfOc7ucRKSJndvgQcNA7IDtjl4leL1EfPI7G4fiw461pup9K/G7mPw0t7GwqptwJifZfaR6mMSr+JIJZ+JWjeq8uMGvDg07G6G+rYo3U9hO55xGfaoyEXvtuHcfX2nh5nZQF4g/dV+9WLztwmgeYxWqjjFpBt+PJurjvuPPHTysSLHsES4XbqlK25LiuzJnVpRVrVmIhs6cvSL2HueO7kVzJg9PVieZDIyC3A7N5+Ym+rjvytkzB9awddJXfW9xeXl50Qk0Pf7jMLLKxXPw93LkGCLHIKrP0uEDR06euoIR7tzgQNvhTEVBM/nMEoY46UX162l5ohkELRQzbwVb1D0zJ0AeOnXm4GFMoEtVIiGTo+Vzi+cWQZajP3n+6rXFSkrCw1aeQUBV1g4fPHL2cCemLTstlJl8ZglG1PM82kRWIqoKOenF3fbm3PGTzxxYqrMH1agDyS1kLQZ258T/i3/69T974Vz156K84nm+0pHq2E6ERpKynT2YyWcWpzscoOrn4SzojDnxlCpN0Fekb7z44jdEd/SLf+6trNDlSjPhx/LzX//6C73qz8VsRS5dcUB1IP5auv7iVzz1593Mnk1mc6wfpnSy66QeyyQ8WtskhtI3Xnrpxf8mSdefevLJp765JC19+6lvlfJKXrHEn8vey3/58rVaN4OscMj1F68Dxxdf+vZfXF+Srn/7KZAnFztZdyObLbv3UGUyzqgZAihhj1hudvtQvvnUk089+fTT337q6afh11MvwV9eqcnIbrNSx2XvhZe/83Ugu7m5eW6Zrbj5X8HO3wSCTz795FNPwy848Hud9C/vW5/PnNwvr0S0ai/T1hS7nEVhu9hZ8G1AgliergQ+/1UerVjLi1fPbdzYnD+3CTT/+w+/852rG1fnN65uXtVilnxXHPK04P+0OP7Jv+j0b+oKmy1/8JBFxTeAmZ3ccsmo0m4Y0uxFRFmjwY/f+953S0+Lzy1eHW5s3LixvLm57P31D3/48gvnbmye29i8UVpabL3y0kuvvPfe+Vvv3Xzn4sWL77z62usL7SCIahBuPY5T2/8/kx7hnQanLH/jp9///vd/8IMf/+CNN9748ZtvvPnm3xT5iry8uLi+fM7f3Dh3Y1HQ/OEL584tnwNru0xjK/3WK6+cB3n91o9uXnz11Vffeuu9TqIUnfMXMH/jSy8hBLWdobfE/1shr/4YZH59fXP9+diL3TjXiiLLAwBY0Xx584/trCjcPHZXqKPfeuXmxdu3P/zw5u3bf/faa6/dejvtZKt7qw8Q0oY7pvIltv1ZNNuw7emxCeOvfN/87EtPxJGYMzORNL3vbNEgtT/hhXvOJy6BaCoM0tO3f3LxnXfe+R8//sH85gKKXGrQ3FwpHadcKeSV5XNA8+WXv/MnXxeb4tyzVlaKH7/yo/O3f37r1sUnnvjJW6/fevdaW93FsKAdE/RUYksxN4lIEhlEKG+P81iVuTu1azo9AfTe4k92NtFb+3yPgDqm7az2pxZcTns8M09kVdkerWtZvLK0wIBQ2z3LX4kH0U0q9tekhPNgugRsbqmE73wTQsq8frf3aOEnt3/yk3f+9uaPtgDlG7e+lRcrKytaFkVRka2sRHK8XIBu/tnf/PCPC1DXTINv5fJ/foCm9tYHt2/ffuL2rQ9eHxtaXBOTZgrfMdYD7mgYQkPJojhuBppJ6FhLXJcv3zE1M2U7D99TQncyg746lU92nx6aEkooJfwzLiRiQFwZ+lWQ53scGe01u9DDwepMzPPOKdmbJvbzISyP5VLoUVOKuyWQkzwku8xHHTvOxjIS/9XXQTlvnz//ayA3f+otZlq+UgaOkyRODGpKsufR0v7pyy9gD0RQruSau+i99Morle88f/Pi+feuN/NQaFZ6u7vNkJEwBvW0GQ47sJnowNXEWLbqvtXxeiVqQ1MNWwUgvm1vgAPwr4CMpxcOq7WKKprN2Sanlannh6HpTG3vitq5cGeneqtBJkMGMyb6IQTNsLsbiifTJIkpdqrupNnaz5Kr3l2kCdulMc16n4j3hrulSlVZLzF/QLJePVinuPZrP7p9++b526hst14jnlWNMqt+4Srfz//1P/yvv7/x8t94KNVm9oNbr9w6f+f8TQH0p62ucZdp1Mh3rrYHBkQqeAxaiWWBryfDkUHUk9QoyrEzkHHshJTCHIdp4bP0IsrlDHQgKQozkXmkoo1r/JXp4qwQT7KhxDQtwmcvLSjVPOohzaFHCjGkxwKbXhV+yNvzwcC4edhDbEcWzs4Da5hGkRpGgCW2KMdRByruZDX2zSl0LruG5FiURnkm7EkBype7EdJUC+JhrRriXec1WY+K7lTKa5pZBE7FifBNl34mc1mr97No5mEmB2kOi8ipaYqyiOCsI0uKR7u9cibTC4XrslM2Y3O5f/775y9eBJ63zt+685pVy/Oe913r+e9+t7DYH37l7//3Pzx/46pVVGIVljV//cNXbt35P7dv3rl9/vaLaZX7BbdUJnnsKWTn224SzZVyLcFZjBlOpqA4bY/B3as6y8Tax5EHngXf4OB5SDPhlHgERw0ncFqsgOkqoXK92rjPYT8ctmjhNxxnP0ouFx9NH5wQrcb02DiHsk6eqDgyJK96C8WUTuHtXMbFhA70VcSAOiDcoodbI6hWYCariKoUt8OomnJck1CUbThCC8ktoOlmlOIgwequm1VioKYZpkNRcwVNGWdCiqUI4R5xv9qEWSy3cSoo0uzhvQiaKpYFloDh+lK868q/DvgNLTdzy86agfTX3n3nwoUL79x86/Xr164vXHt/6/rCwvUPX3vt/Q+uXwNnGmsb1xbgv62Ftrz44vzbr7311p1/vHPzvYVazbVe7EUaEK362ncXqEU4uTEDIysKUcWHtau6KMZPCHwm1Fd46IRQF4eJUEdismdJDqtdYsGiEP2rZMAPRwQ/khHAtyaWlEwDCUdggouzQCNoNT8OJ/hChbORXjWoCmy0hooDBgNLkGpEK30uJj0ZeG3wYrRWaKg0OBOPpSFst03RI66aUIamb+DgVw0uA6GAh9Uvbla4F36TiBG2gqaH46FSzKxEeG0IG5KapgZ4oymaMZoxk7HVvQszZHoKoSRxgmb8F/F/+c4TTzxx4Z23Xvtz5HT9+s/e2tx6/8MPrn/44fvXFvaSt5Hu1tvvnf/Z+7Vqyh53nSRgYXav9gmCg4LzQX8DUQORJg6Cycuw9hzwlEbIRGRRUCoG/WDJgFM0a58VElxzCHDg+Jyx3+yR2m/iCE6ILHAZXkfwrgrXsXBuYVVYPeFf44omUMKNYhhv9V11o0ZoAC9VnFPYeCxyY2LusaLgLzFSL8X9Cbg/I2nCsIomwwoxoQmffPHQxrA5E9DEcxhdmlA9pNCw6L36FnOcj5v7mVc0ymltfeUJlAvv/uzO+9d+9ms3L7773p07719/H/4HZFvrLYaVguKmauv6z26+2swJYDlY2ZGbheReISk8qpOBcYUnyZGGeLAQX8zKICon6E6BkgFqhXXShcIeooIiTWNM0xfcPHkHzSqmxYqANLG/aDTik3BQ9fOJKTDwYoKmXdEUZWs34aQGmowHe/VdIyB09GaXpohpcWwz0oTWnzcajcioCrUqvwlonBZNUEs/5FD1cb9yTBMuH1sdmvAEDPbh2T1oolLEUQRhTjNkk5RXK5wXz//TP945/0+33/3539354MPX3nr77fmtKY0UCrkFPzev3rixcWP757dvLzQpWlezImdY+Ok9E0EQjGQeMIloUWClFTTB+MUFhcIVIHR5rJvIZEiqiEkOWzTRCJEdNFmlmzhVCY/EkCucym7iFWJh4oZ4EqwuEFMKmsLuxY35w+gbDw7rC9pSpZvmLrqJLjOtLYpIqEotmnAXqxOaEDMI3SzCyX5IEyJJa4duGkZzA3tJBHEQuNc4yCYJoV9cQN38+Z3zd+68+stfvvXGxutTGLfWt7Y2NtaPXb47v/3m/C+3j21funTp2Md33/3K1fFaXp7lZtwqlHss1SVuHSIgbopBiyytafphXWAepUYs+tYLShIV/KRWlbpQizFN0NxCdcXkDQeUuA7kUYnhY2UVkSaOpvVV1RCG1syDXi8BvU8l4RvDDD0zlHLi0JpmlXughaGGvtqDnQwwdVWJMzxTiiM72zShieWo4DfRGiJNuGvmqGpY1y+Igmx7FdtsFU0Ih31bDKnMKCtVvMqYZjX5v02zBLMdSqF5z2xHQriZOknkjdPv1FpA5bxw8Z8uXnzi2NXN9fX1Dfi3eXl7c2Nrfh0/bi3Ajxvbx47d/fGxN9+8u3338t3LyPMrv5hMWbDc1DG9pNyxgmVXbHxFtniFB5pWScXQUoNAVqy5YUPMIItMCKAB3cMSgmZkgB7Va6V5oFyIlmHkCWAh8KyKHFelJEm1k4VNQYxEZcqFGzfEKE2oxypmZhgOaHQxCJXB3okSrPMvuYhpR2In4tE6t+FwcTtwsMkny4o5cDRUKR2j4xQNOtQkdM11CXiMYnsLlxnRCFcxPIB4m8BzmlTsV7dBPbwTXOQEAo4eH98LBNUM7uTeLz6QadT3Mtl3xzh17Zqwte/85MITP794Y35+fX5jY2FzYWMdbeom/Lm1Pj8/v7m5effu5V9uI81jxwDmhbsXFsZVIvBXLZl4inyf1/0NXS0FVVRdLUFdBCUAAAbESURBVMdwQ9XcVOp5OmdRgluJZTouDriF++OeJj64CU7bwPWCMrfySIZFMtXWMCfYKwgpqlIxIyj/sNop1zD5lsBJmFeZTtcjnFip2LWEg6yyqlyyY+IVqqsiItFkhA8BfKBWrRq9jHLPDsU9TGxP7HHw75oGfANxvJljS7bGDfcQRkQs4Ri7uN5QRjw/cXHdH2MV96ujxdyNMamlafDbb91LDK1wubh3ftchZBjnEIsU41Q5CV4QOMHg/nJrIawc5Pr21vbd9YWNjzY2keX78yiglJffvHv5EtK8cOGjhUm/JpM18MTD+6nmTB6ygDNWoiCP0snsXp7UkdAv7s4fu7AJEevVG5ub69sfb22tf7wNajlfy41jdy9vH7v88V2k+dFWa7FhfC1ynCmzN3F+wQKOtuyNgsBL5aQZwceHFc5L29sffXR5fWFzfWNhff4Y/Ng8dmx+Y/PNjRrn5Zrm5UuXPtpanWTwLZy2Mwrzz7YQ+EweXDKdqa4z0hNnsqQFd15AU3tj89hHH21uYhS0sbm1vjG/sLUNNOfHsgE0L1/++BLQ3Gq/QkOzM4jdIALZq29xJp+ThEx3FascFt7Y1rKCx1tPfIye8cJHG+ub83c/unAZsR27fAzc5Rao6dY26uR8raEbqJt3L82bHnGakXq6HXhJUITQ4p69tPGLF2iqhbmdcble8mFkGprOPHN+e/7SR5f+r6B5DGnOb2xvLGzP14opZHsDaF4LwKZmIQW/qzNQTdf3uAMtw936bWbyOUuoU09xs9yXA2z9k2Q4Cjm0qGJlTPPysWMbYHA3treh8VkpZu0+Ny7PGxm+xbrvqC6leSAn6SiLc1VnD/w6j5k8DEkI0/qWRoa5jXY2HDm91Oh5TB5e+8Wl7YYmogOa812amwsBIY6X8yTIe8SjWsLtXgytHn3W1HxEkhISG5ZvjXo5Gks75H5majofZcP1jdrSjmnWIqzt+kLgEZn7hp8PLZ0Wmu95viV7ivYgw3lm8nAl03liepafkYTINLModXweGQHjURJuzW/UNLfbNKHRYpRU8zi1AzXRwedavuvGNu/RfrrbqLKZfFFiUdLztWyU5Hq14m2hWKFrO4yPmN1bgCbKhlDNmuYGaKXhZISRwEhIMUyVKimYlCMno2pM+Gwi0SMU1dPJ0NTNDF9cjaGtEdnmyLRltRcRwrLSV5YWtiAQWl/f2lpYCntpwUmBYydHw5Rz4uIaGVTmTuzq/ZLzHaOcZ/JFSihTnhgWkZkVxThSjspWFo5iH9uRjHDO5UKzY5DcLchopLO858c6MTVLSXNQZ1qUOZVJ7PVjTmYvIH/EYng6D1SL9+zM5wkmEriZy05gE1mPh4nM0tJjOlheMK+pY8ojJ7X62CXMYzslVAeOOVSCTLHJDOajl9DSeapkqeXLeRCBE6SeHPqlnRAaeX1ZVzQc9BP4cUQU8K/DxBz1sXvdYywuXSfr5USDE7hkZmYfC4kYcZXY0mQfl7Fy5CxnpIg96oU9CHiVRKMssZVCjVQrdTJZ0ZOUYSzryknOfTmO5SS02Kd4B9tMPg/JOfNMU3ZxiFrWs2KXiQBXthhEuHEvYMQvnDLXerZrcOIUlEY27GvIzCRWj1hqArZ41jR5XARHvMRKisNUfEaMPK/Wi6SWTXTuAzjG0h4ncamn4CMhjNXKQqaRw6Ohxx1Fg9owm3n7+IjpMWIZRsSzlJca90kuhodUGlr1RON0FCJmIrGo8HB9RuLkFtPUocz4bPWRx0tsQrmt9Dwr8ke2PYzijFLPwhX/6vWQhfXF/1ipl3mq6YCTRWbocibPeqcfNxnihJlASTzP89kQ13L1kkLLNE3OqCVbnku1VLZtHHRPuElMiHuyYR/Xy80/+1TlmTx0KXUwpUF/6ELLUQP7qgcx83luD0lqp4EWeJZdRjZlse2VssdyI0zZp3s99Ey+AAlt0DQ9DsPYIzj6bpS4Drch/rHzPB71ZFYMcYIby4pRFCgm7u3N1gR6fAV4EsYjRwmDjJMo4nHkkF7kaHlAskDzIjsjnLmOquIc1xnLx13UGOdqjTInVPxY8zgfEVLIEMXqZAQfrTwwFCMocNXkbBb8/ApIL2e45IaXB35fMfzECco4LgOnZ4aKOiw1maOJjWctzF8RUZPcQ+3j3MvytBSLdAexnWdiK2FWPAt9frXECFZxWYkp4XKWJrMRlr+SoppOmeZu9T51LY+DZGZeZzKTz0f+H0pcnQZL5YEvAAAAAElFTkSuQmCC"
  }
];

export const posts = [
  {
    title: "GERD Nearing Completion, Requires Additional Funding",
    date: "2024-07-29",
    tags: ["Ethiopia", "Development", "GERD"],
    description: "The Grand Ethiopian Renaissance Dam (GERD) is nearing completion but requires an additional 80 billion Birr to be finalized, showcasing a major milestone in national development.",
    imageUrl: "https://picsum.photos/seed/gerd/600/400",
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
