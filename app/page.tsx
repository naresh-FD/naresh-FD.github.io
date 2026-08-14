const projects = [
  {
    name: "react-intelligent-test-generator",
    type: "React testing automation",
    summary:
      "A local, AST-based generator that analyzes React and TypeScript code, then scaffolds tests aligned with React Testing Library practices.",
    href: "https://naresh-fd.github.io/react-intelligent-test-generator/",
    stat: "2.5 MB",
  },
  {
    name: "RepoScribe",
    type: "Developer documentation",
    summary:
      "A documentation generator for React, TypeScript, Java, and Spring Boot projects with Markdown, PDF, and optional static site output.",
    href: "https://naresh-fd.github.io/RepoScribe/",
    stat: "Docs site",
  },
  {
    name: "Argus",
    type: "Security scanning",
    summary:
      "A local-first static security scanner for JavaScript, TypeScript, React, Java, and Python, with optional local LLM enrichment.",
    href: "https://github.com/naresh-FD/Argus/blob/main/docs/local-workflows.md",
    stat: "Local-first",
  },
  {
    name: "copilot-governance",
    type: "AI governance",
    summary:
      "A reusable governance template for GitHub Copilot instructions, prompt workflows, secure coding guardrails, and audit-oriented controls.",
    href: "https://naresh-fd.github.io/copilot-governance/",
    stat: "Guardrails",
  },
];

const capabilities = [
  "React and TypeScript tooling",
  "Developer documentation systems",
  "Static analysis and security automation",
  "Prompt governance and AI workflow standards",
];

const contacts = [
  {
    label: "Email",
    value: "mail2nareshfd@gmail.com",
    href: "mailto:mail2nareshfd@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/naresh-kumar-r-a590181b",
    href: "https://www.linkedin.com/in/naresh-kumar-r-a590181b/",
  },
  {
    label: "GitHub",
    value: "github.com/naresh-FD",
    href: "https://github.com/naresh-FD",
  },
  {
    label: "Portfolio",
    value: "naresh-fd.github.io",
    href: "https://naresh-fd.github.io/",
  },
];

const externalLink = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="https://naresh-fd.github.io/" {...externalLink}>
            Naresh Kumar R
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#focus">Focus</a>
            <a href="#contact">Contact</a>
            <a href="https://www.linkedin.com/in/naresh-kumar-r-a590181b/" {...externalLink}>
              LinkedIn
            </a>
            <a href="https://github.com/naresh-FD" {...externalLink}>
              GitHub
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer &amp; tool builder</p>
            <h1 id="hero-title">
              Building tools that make <span>engineering work clearer.</span>
            </h1>
            <p className="intro">
              I&apos;m Naresh Kumar R. I create practical, local-first tools for
              test generation, repository documentation, security scanning,
              and responsible AI-assisted development.
            </p>
            <div className="hero-actions" aria-label="Profile links">
              <a className="button primary" href="https://github.com/naresh-FD" {...externalLink}>
                View GitHub
              </a>
              <a
                className="button secondary"
                href="https://www.linkedin.com/in/naresh-kumar-r-a590181b/"
                {...externalLink}
              >
                LinkedIn
              </a>
              <a className="button secondary" href="https://naresh-fd.github.io/" {...externalLink}>
                Current site
              </a>
            </div>
          </div>

          <aside className="hero-portrait" aria-label="Naresh Kumar R profile">
            <div className="portrait-frame">
              <img
                src="https://avatars.githubusercontent.com/u/50324374?v=4"
                alt="Naresh Kumar R"
                className="avatar"
              />
            </div>
            <div className="profile-strip">
              <div>
                <p className="profile-name">Naresh Kumar R</p>
                <p className="profile-meta">Developer tools / AI governance</p>
              </div>
              <span className="availability">Open to connect</span>
            </div>
            <div className="portrait-note" aria-hidden="true">
              <span>01</span>
              <p>Local-first thinking.<br />Reviewable results.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section focus-section" id="focus" aria-labelledby="focus-title">
        <div>
          <p className="eyebrow">Engineering focus</p>
          <h2 id="focus-title">Tooling that keeps work local, repeatable, and easier to review.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <div className="capability" key={capability}>
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected repositories</p>
          <h2 id="work-title">Public projects from GitHub</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span>{project.type}</span>
                <strong>{project.stat}</strong>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <a href={project.href} aria-label={`Open ${project.name} documentation`} {...externalLink}>
                View docs
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Get in touch with Naresh Kumar R.</h2>
          <p className="contact-copy">
            For project discussions, collaboration, or repository questions,
            use email or connect through LinkedIn and GitHub.
          </p>
        </div>
        <div className="contact-list" aria-label="Contact links">
          {contacts.map((contact) => (
            <a className="contact-card" href={contact.href} key={contact.label} {...externalLink}>
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
