function App() {
  return (
    <main className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="logo">
          DHANASABARISH<span>.S</span>
        </a>

       <div className="nav-links">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#experience">Experience</a>
  <a href="#contact">Contact</a>

  <a
    href="https://github.com/SABARI200404"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/s-sabari-192042342/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* HERO SECTION */}
<section className="hero">
  <div className="hero-content">

    <img
      src="/profile.jpg"
      alt="S. Dhanasabarish"
      className="profile-photo"
    />

    <p className="hero-tag">
      AI & DATA SCIENCE • FRONTEND • FULL-STACK
    </p>

    <h1>
      Hi, I'm <span>S. Dhanasabarish</span>
    </h1>

    <h2>
      Vibe Coder & Frontend Developer
    </h2>

    <p className="hero-description">
      I build AI-powered applications, modern web experiences,
      and practical digital solutions by combining AI-assisted
      development with full-stack technologies.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        View My Projects
      </a>

      <a
        href="/Dhanasabarish_Resume.pdf"
        download
        className="secondary-btn"
      >
        Download Resume
      </a>

      <a href="#contact" className="secondary-btn">
        Contact Me
      </a>
    </div>

  </div>
</section>

      {/* ABOUT SECTION */}
<section id="about" className="about-section">
  <div className="section-heading">
    <p>ABOUT ME</p>
    <h2>Building with curiosity.<br />Learning by creating.</h2>
  </div>

  <div className="about-content">
    <div className="about-text">
      <p>
        I'm S. Dhanasabarish, a B.Tech Artificial Intelligence and
        Data Science student who enjoys turning ideas into practical
        digital products.
      </p>

      <p>
        I work across frontend development, AI-powered applications,
        and full-stack projects. I use AI-assisted development to
        prototype faster, understand generated code, debug problems,
        and continuously improve my technical skills.
      </p>

      <p>
        My current focus is becoming a stronger frontend and full-stack
        developer while building projects that solve real-world problems.
      </p>
    </div>

    <div className="about-card">
      <div className="about-stat">
        <span>01</span>
        <p>AI & Data Science</p>
      </div>

      <div className="about-stat">
        <span>02</span>
        <p>Frontend Development</p>
      </div>

      <div className="about-stat">
        <span>03</span>
        <p>AI-Powered Applications</p>
      </div>

      <div className="about-stat">
        <span>04</span>
        <p>Rapid Prototyping</p>
      </div>
    </div>
  </div>
</section>
{/* WHAT I DO SECTION */}
<section className="services-section">
  <div className="section-heading">
    <p>WHAT I DO</p>
    <h2>Turning ideas into<br />digital experiences.</h2>
  </div>

  <div className="services-grid">

    <div className="service-card">
      <span>01</span>
      <h3>Frontend Development</h3>
      <p>
        I build responsive, modern, and user-friendly interfaces
        using HTML, CSS, JavaScript, and React.
      </p>
    </div>

    <div className="service-card">
      <span>02</span>
      <h3>AI-Powered Applications</h3>
      <p>
        I create practical applications by combining AI tools,
        APIs, and modern web technologies.
      </p>
    </div>

    <div className="service-card">
      <span>03</span>
      <h3>Rapid Prototyping</h3>
      <p>
        I turn ideas into working prototypes quickly using
        AI-assisted development and iterative problem solving.
      </p>
    </div>

    <div className="service-card">
      <span>04</span>
      <h3>Full-Stack Projects</h3>
      <p>
        I connect frontend interfaces with backend services,
        APIs, and databases to build complete applications.
      </p>
    </div>

  </div>
</section>

{/* SKILLS SECTION */}
<section id="skills" className="skills-section">
  <div className="section-heading">
    <p>MY SKILLS</p>
    <h2>Tools I use to<br />build things.</h2>
  </div>

  <div className="skills-grid">

    <div className="skill-card">
      <span className="skill-number">01</span>
      <h3>Programming</h3>

      <div className="skill-list">
        <span>Python Basics</span>
        <span>Java</span>
        <span>JavaScript</span>
      </div>
    </div>

    <div className="skill-card">
      <span className="skill-number">02</span>
      <h3>Frontend</h3>

      <div className="skill-list">
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>Responsive Design</span>
      </div>
    </div>

    <div className="skill-card">
      <span className="skill-number">03</span>
      <h3>AI & Data</h3>

      <div className="skill-list">
        <span>Artificial Intelligence</span>
        <span>Data Science</span>
        <span>Prompt Engineering</span>
        <span>AI-Assisted Development</span>
      </div>
    </div>

    <div className="skill-card">
      <span className="skill-number">04</span>
      <h3>Tools & Workflow</h3>

      <div className="skill-list">
        <span>Git & GitHub</span>
        <span>VS Code</span>
        <span>Supabase</span>
        <span>Rapid Prototyping</span>
      </div>
    </div>

  </div>
</section>

{/* PROJECTS SECTION */}
<section id="projects" className="projects-section">
  <div className="section-heading">
    <p>SELECTED WORK</p>
    <h2>Things I've<br />been building.</h2>
  </div>

  <div className="projects-grid">

    {/* PROJECT 01 */}
    <article className="project-card">
      <img
  src="/project-echoo.jpg"
  alt="ECHOO ROOM project preview"
  className="project-image"
/>
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-status">AI PROJECT</span>
      </div>

      <div className="project-content">
        <h3>ECHOO ROOM</h3>

        <p>
          An AI-powered emotional support platform designed to help
          users express emotions through text, voice, and interactive
          experiences.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>TypeScript</span>
          <span>Supabase</span>
          <span>AI</span>
        </div>

        <a
  href="https://github.com/SABARI200404/empathic-echo-bot"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View Project →
</a>
      </div>
    </article>

    {/* PROJECT 02 */}
    <article className="project-card">
      <img
  src="/project-clinic.jpg"
  alt="Clinical Lab Website project preview"
  className="project-image"
/>
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-status">FRONTEND</span>
      </div>

      <div className="project-content">
        <h3>CLINICAL LAB WEBSITE</h3>

        <p>
          A responsive clinical laboratory website focused on clean
          user experience, accessible information, and modern
          frontend design.
        </p>

        <div className="project-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Responsive UI</span>
        </div>

        <a
  href="https://github.com/SABARI200404/sri-ram-clinical-lab"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View Project →
</a>
      </div>
    </article>

    {/* PROJECT 03 */}
    <article className="project-card">
      <img
  src="/project-reova.jpg"
  alt="REOVA project preview"
  className="project-image"
/>
      <div className="project-top">
        <span className="project-number">03</span>
        <span className="project-status">FULL-STACK</span>
      </div>

      <div className="project-content">
        <h3>REOVA</h3>

        <p>
          A full-stack application combining a modern frontend with
          backend services, designed with a focus on practical
          functionality and scalable architecture.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>REST API</span>
        </div>

       <a
  href="https://github.com/SABARI200404/REOVA-ai"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View Project →
</a>
      </div>
    </article>

  </div>
</section>

{/* EXPERIENCE SECTION */}
<section id="experience" className="experience-section">
  <div className="section-heading">
    <p>EXPERIENCE & LEADERSHIP</p>
    <h2>Beyond the<br />code.</h2>
  </div>

  <div className="experience-list">

    {/* EXPERIENCE 01 */}
    <div className="experience-item">
      <div className="experience-year">
        2026
      </div>

      <div className="experience-details">
        <h3>Social Media Vice President</h3>

        <h4>Dandilion 2K26</h4>

        <p>
          Contributed to social media coordination, content planning,
          event promotion, and digital communication for the college
          event.
        </p>

        <div className="experience-tags">
          <span>Social Media</span>
          <span>Content</span>
          <span>Team Coordination</span>
        </div>
      </div>
    </div>

    {/* EXPERIENCE 02 */}
    <div className="experience-item">
      <div className="experience-year">
        2026
      </div>

      <div className="experience-details">
        <h3>VIP Management</h3>

        <h4>Dandilion 2K26</h4>

        <p>
          Assisted with VIP coordination and event management,
          developing communication, responsibility, and
          team-handling skills.
        </p>

        <div className="experience-tags">
          <span>Event Management</span>
          <span>Communication</span>
          <span>Coordination</span>
        </div>
      </div>
    </div>

  </div>
</section>

{/* CERTIFICATES SECTION */}
<section className="certificates-section">
  <div className="section-heading">
    <p>CERTIFICATES & ACHIEVEMENTS</p>
    <h2>Learning beyond<br />the classroom.</h2>
  </div>

  <div className="certificates-grid">

    <article className="certificate-card">
      <span className="certificate-year">2026</span>

      <div>
        <h3>Hackerz Tech Trivia</h3>
        <p>Chennai Institute of Technology</p>
      </div>

      <span className="certificate-type">
        PARTICIPATION
      </span>
    </article>

    <article className="certificate-card">
      <span className="certificate-year">2025</span>

      <div>
        <h3>Hackerz Tech Trivia</h3>
        <p>Chennai Institute of Technology</p>
      </div>

      <span className="certificate-type">
        PARTICIPATION
      </span>
    </article>

    <article className="certificate-card">
      <span className="certificate-year">2025</span>

      <div>
        <h3>Cognebula — Prompt Crafting</h3>
        <p>Velammal Engineering College</p>
      </div>

      <span className="certificate-type">
        PARTICIPATION
      </span>
    </article>

  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="contact-section">
  <div className="contact-content">

    <p className="contact-label">GET IN TOUCH</p>

    <h2>
      Let's build something
      <span> meaningful.</span>
    </h2>

    <p className="contact-description">
      I'm open to internships, frontend development opportunities,
      AI projects, and collaborations.
    </p>

    <div className="contact-buttons">
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanasabari2004@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Email Me
</a>

      <a
        href="https://github.com/SABARI200404"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-btn"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/s-sabari-192042342/"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-btn"
      >
        LinkedIn
      </a>
    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="footer">
  <p>© 2026 S. Dhanasabarish. Built with curiosity.</p>

  <p>
    AI & Data Science • Frontend Developer • Vibe Coder
  </p>
</footer>

    

    </main>
  );
}

export default App;