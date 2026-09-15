import {
  ArrowUpRight,
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
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import {
  SiAngular,
  SiCapacitor,
  SiExpo,
  SiFirebase,
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
    name: "React Intelligent Test Generator",
    status: "Flagship project",
    date: "Aug 2026",
    language: "TypeScript · Local AI",
    summary: "A local-first test generation system that combines AST analysis with reviewable AI output for React codebases.",
    href: "https://github.com/naresh-FD/react-intelligent-test-generator",
    liveHref: "https://naresh-fd.github.io/react-intelligent-test-generator/",
    featured: true,
  },
  {
    name: "Argus Security Validation",
    status: "Security engineering",
    date: "Aug 2026",
    language: "TypeScript · OWASP",
    summary: "Production documentation and validation evidence for running Argus against OWASP Juice Shop security scenarios.",
    href: "https://github.com/naresh-FD/argus-security-validation-docs",
    featured: true,
  },
  {
    name: "RepoScribe",
    status: "Developer tooling",
    date: "Aug 2026",
    language: "TypeScript · Java",
    summary: "Generates layered Markdown, PDF, and searchable web documentation for React, TypeScript, Java, and Spring Boot repositories.",
    href: "https://github.com/naresh-FD/RepoScribe",
    liveHref: "https://naresh-fd.github.io/RepoScribe/",
  },
  {
    name: "Conduit Architecture",
    status: "Platform architecture",
    date: "Aug 2026",
    language: "Architecture · Delivery",
    summary: "A public architecture and delivery webdoc for the Conduit platform, covering its threat model and phased delivery gates.",
    href: "https://github.com/naresh-FD/conduit-docs",
    liveHref: "https://naresh-fd.github.io/conduit-docs/",
  },
  {
    name: "Mileage Tracker",
    status: "Mobile product",
    date: "Jul 2026",
    language: "React · Capacitor",
    summary: "A local-first Android app for trip, fuel, mileage, and spend tracking with SQLite-backed persistence and analytics.",
    href: "https://github.com/naresh-FD/milage-tracker",
  },
  {
    name: "React TestGen Coverage",
    status: "Model research",
    date: "Mar 2026",
    language: "Python · Ollama",
    summary: "A locally runnable fine-tuned model pipeline for generating Jest and React Testing Library tests from TSX components.",
    href: "https://github.com/naresh-FD/react-testgen-coverage",
  },
  {
    name: "ListSync",
    status: "Mobile application",
    date: "Mar 2026",
    language: "Expo · Firebase",
    summary: "A mobile-first shared list manager with authentication, favourites, offline storage, and Firestore synchronization.",
    href: "https://github.com/naresh-FD/listsync",
  },
  {
    name: "Banking Data Assessment",
    status: "Engineering assessment",
    date: "Feb 2026",
    language: "TypeScript · Data",
    summary: "An anonymized banking dataset and structured assessment environment for evaluating analysis and engineering skills.",
    href: "https://github.com/naresh-FD/banking-dashboard-TESTGEN-",
  },
];

const profileStats = [
  { value: "13+", label: "Years in engineering" },
  { value: "34", label: "Public repositories" },
  { value: "08", label: "Recent projects" },
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
  {
    group: "Mobile & cloud",
    items: [
      { name: "Expo", icon: SiExpo },
      { name: "Capacitor", icon: SiCapacitor },
      { name: "Firebase", icon: SiFirebase },
      { name: "Cloud architecture", icon: CloudCog },
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
              <a href="#stack">Stack</a>
              <a href="#contact">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <aside className="hero-portrait" aria-label="Naresh Kumar R profile">
            <div className="portrait-frame">
              <Image
                src="https://avatars.githubusercontent.com/u/50324374?v=4"
                alt="Naresh Kumar R"
                className="avatar"
                width={390}
                height={444}
                priority
                unoptimized
              />
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

        <div className="profile-stats" aria-label="Profile highlights">
          {profileStats.map((stat) => (
            <div className="profile-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <a href="https://github.com/naresh-FD?tab=repositories" {...externalLink}>
            Explore all GitHub work <ArrowUpRight size={17} aria-hidden="true" />
          </a>
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
            <p className="eyebrow">Latest work · 2026</p>
            <h2 id="work-title">Ideas turned into working systems.</h2>
          </div>
          <p>A current selection spanning local AI, security validation, repository intelligence, platform architecture, and mobile products.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card${project.featured ? " project-card-featured" : ""}`} key={project.name}>
              <div className="project-topline"><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.status}</strong><time>{project.date}</time></div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="project-footer">
                <span>{project.language}</span>
                <div className="project-links">
                  {project.liveHref ? <a href={project.liveHref} aria-label={`Open ${project.name} live site`} {...externalLink}>Live site <ArrowUpRight size={15} aria-hidden="true" /></a> : null}
                  <a href={project.href} aria-label={`Open ${project.name} on GitHub`} {...externalLink}>GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="work-archive">
          <p>Older experiments, UI patterns, backend prototypes, and learning projects are preserved on GitHub.</p>
          <a href="https://github.com/naresh-FD?tab=repositories" {...externalLink}>Browse all 34 repositories <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="section tech-section" id="stack" aria-labelledby="tech-title">
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
          <li><Braces aria-hidden="true" /><span>Advancing <strong>TestGen</strong> with evidence-backed evaluation and reviewable, AST-aware output.</span></li>
          <li><ShieldCheck aria-hidden="true" /><span>Validating <strong>Argus</strong> against realistic OWASP security scenarios and production expectations.</span></li>
          <li><Workflow aria-hidden="true" /><span>Turning repository structure into useful onboarding material through <strong>RepoScribe</strong>.</span></li>
          <li><Sparkles aria-hidden="true" /><span>Designing local-first tools where productivity, privacy, and engineering quality reinforce each other.</span></li>
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
