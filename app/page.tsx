const projects = [
  {
    name: "react-intelligent-test-generator",
    type: "React testing automation",
    summary:
      "A local, AST-based generator that analyzes React and TypeScript code, then scaffolds tests aligned with React Testing Library practices.",
    href: "https://github.com/naresh-FD/react-intelligent-test-generator",
    stat: "2.5 MB",
  },
  {
    name: "RepoScribe",
    type: "Developer documentation",
    summary:
      "A documentation generator for React, TypeScript, Java, and Spring Boot projects with Markdown, PDF, and optional static site output.",
    href: "https://github.com/naresh-FD/RepoScribe",
    stat: "Docs site",
  },
  {
    name: "Argus",
    type: "Security scanning",
    summary:
      "A local-first static security scanner for JavaScript, TypeScript, React, Java, and Python, with optional local LLM enrichment.",
    href: "https://github.com/naresh-FD/Argus",
    stat: "Local-first",
  },
  {
    name: "copilot-governance",
    type: "AI governance",
    summary:
      "A reusable governance template for GitHub Copilot instructions, prompt workflows, secure coding guardrails, and audit-oriented controls.",
    href: "https://github.com/naresh-FD/copilot-governance",
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

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="https://naresh-fd.github.io/">
            Naresh Kumar R
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#focus">Focus</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/naresh-FD">GitHub</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Developer portfolio</p>
            <h1 id="hero-title">Naresh Kumar R builds practical developer tools.</h1>
            <p className="intro">
              Public work focused on test generation, repository documentation,
              security scanning, and governance patterns for AI-assisted
              engineering teams.
            </p>
            <div className="hero-actions" aria-label="Profile links">
              <a className="button primary" href="https://github.com/naresh-FD">
                View GitHub
              </a>
              <a className="button secondary" href="https://naresh-fd.github.io/">
                Current site
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="GitHub profile summary">
            <img
              src="https://avatars.githubusercontent.com/u/50324374?v=4"
              alt="Naresh FD GitHub avatar"
              className="avatar"
            />
            <div>
              <p className="profile-name">Naresh Kumar R</p>
              <p className="profile-meta">@naresh-FD · 4 public repositories highlighted</p>
            </div>
            <div className="metric-row">
              <span>Default branch</span>
              <strong>main</strong>
            </div>
            <div className="metric-row">
              <span>Profile</span>
              <strong>GitHub</strong>
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
              <a href={project.href} aria-label={`Open ${project.name} on GitHub`}>
                Open repository
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
            use email or connect through GitHub.
          </p>
        </div>
        <div className="contact-list" aria-label="Contact links">
          {contacts.map((contact) => (
            <a className="contact-card" href={contact.href} key={contact.label}>
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
