import portfolioData from "@/data/portfolioData";
import styles from "./page.module.css";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const basePath = process.env.NODE_ENV === "production" ? "/My-Portfolio" : "";

export default function Home() {
  const { profile, about, skills, projects, experience, education, contact } =
    portfolioData;

  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.title}</p>
          </div>
          <nav aria-label="Primary navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
              <li>
                <a className={styles.resumeButton} href={`${basePath}/resume.pdf`}>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className={styles.main}>
        <section id="about" className={styles.section}>
          <h2>About</h2>
          <p>{about}</p>
        </section>

        <section id="skills" className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.chipList}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.cardGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.card}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Tech:</strong> {project.tech.join(", ")}
                </p>
                <a href={project.link}>View project</a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <h2>Experience</h2>
          <div className={styles.timeline}>
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className={styles.card}>
                <h3>{item.role}</h3>
                <p>
                  {item.company} | {item.period}
                </p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className={styles.section}>
          <h2>Education</h2>
          <div className={styles.timeline}>
            {education.map((item) => (
              <article
                key={`${item.degree}-${item.institution}`}
                className={styles.card}
              >
                <h3>{item.degree}</h3>
                <p>
                  {item.institution} | {item.period}
                </p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>You can update these links and connect details in the data file.</p>
          <ul className={styles.contactLinks}>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>

          <form className={styles.contactForm} aria-label="Contact form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project"
            />

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}
