import {
  Blocks,
  Braces,
  Fingerprint,
  GitPullRequest,
  Globe2,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
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
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "Redux", "Sass"],
  },
  {
    group: "Backend & databases",
    items: ["Node.js", "Java", "Python", "MongoDB", "PostgreSQL", "MySQL", "Microsoft SQL Server"],
  },
  {
    group: "DevOps & AI tooling",
    items: ["Azure DevOps", "GitHub Actions", "Git", "LangGraph", "Ollama", "GitHub Copilot"],
  },
];

const experience = [
  {
    role: "Associate Architect",
    organization: "Global IT services firm",
    duration: "2024 - Present",
    focus: "Frontend architecture, identity modernization, and AI developer tooling for an enterprise commercial banking platform.",
  },
  {
    role: "Technical Lead",
    organization: "Product engineering company, Chennai",
    duration: "Previous",
    focus: "Cross-functional team leadership and React and Node.js product delivery.",
  },
  {
    role: "Full-Stack Developer",
    organization: "Multiple organizations",
    duration: "Earlier",
    focus: "Web application development across frontend, backend, databases, and delivery systems.",
  },
];

const contacts = [
  { label: "Email", value: "mail2nareshfd@gmail.com", href: "mailto:mail2nareshfd@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/naresh-kumar-r-a590181b", href: "https://www.linkedin.com/in/naresh-kumar-r-a590181b/", icon: SiLinkedin },
  { label: "GitHub", value: "github.com/naresh-FD", href: "https://github.com/naresh-FD", icon: SiGithub },
  { label: "Portfolio", value: "naresh-fd.github.io", href: "https://naresh-fd.github.io/", icon: Globe2 },
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
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Associate Architect / 13+ years in engineering</p>
            <h1 id="hero-title">Naresh Kumar R</h1>
            <p className="role-line">Associate Architect · Full-Stack Engineering · AI Developer Tooling</p>
            <p className="intro">
              Building enterprise web platforms with a current focus on secure banking architecture and local-first AI developer tooling.
            </p>
            <div className="hero-actions" aria-label="Profile links">
              <a className="button primary" href="https://www.linkedin.com/in/naresh-kumar-r-a590181b/" {...externalLink}>
                <SiLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a className="button secondary" href="mailto:mail2nareshfd@gmail.com" {...externalLink}>
                <Mail size={18} aria-hidden="true" /> Email
              </a>
              <a className="button secondary" href="https://github.com/naresh-FD" {...externalLink}>
                <SiGithub aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>

          <aside className="hero-portrait" aria-label="Naresh Kumar R profile">
            <div className="portrait-frame">
              <img src="https://avatars.githubusercontent.com/u/50324374?v=4" alt="Naresh Kumar R" className="avatar" />
            </div>
            <div className="profile-strip">
              <div>
                <p className="profile-name">Enterprise architecture</p>
                <p className="profile-meta">Banking / Identity / Developer experience</p>
              </div>
              <span className="availability">Chennai, India</span>
            </div>
            <div className="portrait-note" aria-hidden="true">
              <span>13+</span>
              <p>Years building<br />across the stack.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">About me</p>
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
              <div className="tech-list">{technology.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <p className="eyebrow">Professional experience</p>
          <h2 id="experience-title">From full-stack delivery to architecture.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={item.role}>
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-role"><h3>{item.role}</h3><p>{item.organization}</p></div>
              <strong>{item.duration}</strong>
              <p>{item.focus}</p>
            </article>
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

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s compare notes.</h2>
          <p className="contact-copy">If this overlaps with what you&apos;re working on, explore the repositories or get in touch.</p>
        </div>
        <div className="contact-list" aria-label="Contact links">
          {contacts.map((contact) => (
            <a className="contact-card" href={contact.href} key={contact.label} {...externalLink}>
              <span className="contact-icon" aria-hidden="true"><contact.icon size={22} strokeWidth={1.9} /></span>
              <span className="contact-details"><span>{contact.label}</span><strong>{contact.value}</strong></span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
