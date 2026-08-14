import {
  Blocks,
  Braces,
  CloudCog,
  Database,
  Fingerprint,
  GitPullRequest,
  Globe2,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import {
  SiAngular,
  SiGithubactions,
  SiGithubcopilot,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import { ThemeToggle } from "./theme-toggle";

const externalLink = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const currentAreas = [
  {
    title: "Frontend architecture",
    detail: "Designing and evolving React micro-frontends and Angular modules integrated with Java microservices.",
    icon: Blocks,
  },
  {
    title: "Authentication & identity",
    detail: "Modernizing legacy access management, including session architecture and token-flow redesign.",
    icon: Fingerprint,
  },
  {
    title: "Application integration",
    detail: "Aligning service contracts and API communication patterns across frontend and backend teams.",
    icon: Workflow,
  },
  {
    title: "Code quality & security",
    detail: "Establishing review standards, secure coding practices, and static analysis in the delivery workflow.",
    icon: ShieldCheck,
  },
  {
    title: "Developer productivity",
    detail: "Piloting AI-assisted development practices and internal tooling within strict compliance boundaries.",
    icon: Sparkles,
  },
  {
    title: "CI/CD",
    detail: "Building and maintaining Azure DevOps pipelines for reliable, modular deployments.",
    icon: GitPullRequest,
  },
];

const projects = [
  {
    name: "Argus",
    status: "In active development",
    summary: "Local-first code and pull-request scanning for security, quality, and compliance issues.",
    href: "https://github.com/naresh-FD/Argus/blob/main/docs/local-workflows.md",
  },
  {
    name: "TestGen",
    status: "AST-based generation",
    summary: "Automated test generation across React, Java, and Python with reviewable local output.",
    href: "https://naresh-fd.github.io/react-intelligent-test-generator/",
  },
  {
    name: "RepoScribe",
    status: "Repository intelligence",
    summary: "Automated multi-language repository documentation for faster onboarding and maintenance.",
    href: "https://naresh-fd.github.io/RepoScribe/",
  },
  {
    name: "Copilot Governance",
    status: "Standards & policy",
    summary: "Reusable Copilot instructions, repository standards, guardrails, and automated policy sync.",
    href: "https://naresh-fd.github.io/copilot-governance/",
  },
];

const technologies = [
  {
    group: "Frontend",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Redux", icon: SiRedux },
      { name: "Sass", icon: SiSass },
    ],
  },
  {
    group: "Backend & databases",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Java", icon: SiOpenjdk },
      { name: "Python", icon: SiPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Microsoft SQL Server", icon: Database },
    ],
  },
  {
    group: "DevOps & AI tooling",
    items: [
      { name: "Azure DevOps", icon: CloudCog },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Git", icon: GitPullRequest },
      { name: "LangGraph", icon: SiLangchain },
      { name: "Ollama", icon: SiOllama },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
    ],
  },
];

const contacts = [
  { label: "Email", value: "mail2nareshfd@gmail.com", href: "mailto:mail2nareshfd@gmail.com", icon: Mail, iconClass: undefined },
  { label: "LinkedIn", value: "linkedin.com/in/naresh-kumar-r-a590181b", href: "https://www.linkedin.com/in/naresh-kumar-r-a590181b/", icon: FaLinkedinIn, iconClass: undefined },
  { label: "GitHub", value: "github.com/naresh-FD", href: "https://github.com/naresh-FD", icon: SiGithub, iconClass: undefined },
  { label: "Portfolio", value: "naresh-fd.github.io", href: "https://naresh-fd.github.io/", icon: Globe2, iconClass: undefined },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top">NKR</a>
          <div className="nav-actions">
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <aside className="hero-portrait" aria-label="Naresh Kumar R profile">
            <div className="portrait-frame">
              <img src="https://avatars.githubusercontent.com/u/50324374?v=4" alt="Naresh Kumar R" className="avatar" />
            </div>
          </aside>

          <div className="hero-copy">
            <p className="eyebrow">About me</p>
            <h1 id="hero-title">Naresh Kumar R</h1>
            <p className="role-line">Associate Architect with 13+ years across full-stack engineering and technical leadership.</p>
            <p className="intro">
              I build secure enterprise platforms and local-first developer tools, bringing together frontend architecture, identity modernization, and practical AI adoption in regulated environments.
            </p>
            <div className="hero-actions" aria-label="Profile links">
              <a className="social-icon-link primary" href="https://www.linkedin.com/in/naresh-kumar-r-a590181b/" aria-label="LinkedIn" data-label="LinkedIn" {...externalLink}>
                <FaLinkedinIn size={21} aria-hidden="true" />
              </a>
              <a className="social-icon-link" href="mailto:mail2nareshfd@gmail.com" aria-label="Email" data-label="Email" {...externalLink}>
                <Mail size={20} aria-hidden="true" />
              </a>
              <a className="social-icon-link" href="https://github.com/naresh-FD" aria-label="GitHub" data-label="GitHub" {...externalLink}>
                <SiGithub size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">How I work</p>
          <h2 id="about-title">Architecture grounded in delivery.</h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m an Associate Architect with 13+ years in software engineering, spanning full-stack development, technical leadership, and frontend architecture. I currently work on an enterprise commercial banking platform built with React micro-frontends and Angular modules, integrated with Java microservices and delivered through Azure DevOps CI/CD.
          </p>
          <p>
            The thread running through my work is simple: developer productivity should never come at the cost of security. Regulated environments make that tension real, which is why the AI tooling I build out of personal interest is local-first by design, keeping code and data inside the environment where they belong.
          </p>
          <blockquote>Useful automation should be reviewable, secure, and close to the code it serves.</blockquote>
        </div>
      </section>

      <section className="section areas-section" id="focus" aria-labelledby="areas-title">
        <div className="section-heading">
          <p className="eyebrow">Current areas of work</p>
          <h2 id="areas-title">Secure systems, integrated teams, dependable delivery.</h2>
        </div>
        <div className="area-grid">
          {currentAreas.map((area) => (
            <article className="area-item" key={area.title}>
              <area.icon size={22} strokeWidth={1.8} aria-hidden="true" />
              <div><h3>{area.title}</h3><p>{area.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">AI developer tooling</p>
            <h2 id="work-title">Built for regulated environments.</h2>
          </div>
          <p>Personal-interest projects designed so source code and sensitive data can remain inside the local environment.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline"><span>0{index + 1}</span><strong>{project.status}</strong></div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <a href={project.href} aria-label={`Open ${project.name} documentation`} {...externalLink}>View documentation</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section tech-section" aria-labelledby="tech-title">
        <div className="section-heading">
          <p className="eyebrow">Core technologies</p>
          <h2 id="tech-title">A full-stack toolkit shaped by production work.</h2>
        </div>
        <div className="tech-groups">
          {technologies.map((technology) => (
            <div className="tech-group" key={technology.group}>
              <h3>{technology.group}</h3>
              <div className="tech-list">
                {technology.items.map((item) => (
                  <span className="tech-icon" key={item.name} data-label={item.name} aria-label={item.name}>
                    <item.icon size={28} aria-hidden="true" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section current-section" aria-labelledby="current-title">
        <div>
          <p className="eyebrow">Current focus</p>
          <h2 id="current-title">What I&apos;m exploring now.</h2>
        </div>
        <ul className="focus-list">
          <li><Braces aria-hidden="true" /><span>Evolving <strong>Argus</strong> with broader language coverage and a tighter pull-request review workflow.</span></li>
          <li><Sparkles aria-hidden="true" /><span>Local inference for developer workflows using small and fine-tuned models through <strong>Ollama</strong>.</span></li>
          <li><Workflow aria-hidden="true" /><span>Agentic code-analysis pipelines with <strong>LangGraph</strong>.</span></li>
          <li><ShieldCheck aria-hidden="true" /><span>Measuring the quality impact of AI-assisted development, not only the speed.</span></li>
        </ul>
      </section>

      <section className="contact-band" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Let&apos;s compare notes.</h2>
            <p className="contact-copy">If secure platforms, developer experience, or local-first AI overlaps with your work, reach out through any of these channels.</p>
          </div>
          <div className="contact-list" aria-label="Contact links">
            {contacts.map((contact) => (
              <a className="contact-card" href={contact.href} key={contact.label} aria-label={contact.label} data-label={contact.label} {...externalLink}>
                <contact.icon className={contact.iconClass} size={contact.iconClass ? 26 : 24} strokeWidth={1.9} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
