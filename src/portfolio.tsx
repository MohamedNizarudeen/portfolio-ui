
import { useState } from "react";
import axios from "axios";
import Hero3D from "./Hero3D";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      
      await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  formData
);

      setStatus("Message sent successfully! I'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <div className="portfolio">

      {/* Header */}
      <header className="header"> 
        <div className="container nav-container"> 
          <a href="#home" className="logo" onClick={() => setMenuOpen(false)} > MN<span>.</span> </a> 
          {/* Desktop Navigation */} 
          <nav className={`navbar ${menuOpen ? "active" : ""}`}> 
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a> 
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a> 
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
             <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a> 
              </nav> 
              {/* Hamburger Button */} 
              <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen} > 
                <span></span> 
                <span></span> 
                <span></span> 
                </button> 
                </div> 
                </header>

      {/* Hero */}
      <main>

        <section id="home" className="hero"> 
          <div className="container hero-content"> 
            <div className="hero-text"> <p className="subtitle"> Hello, I'm </p> <h1> Mohamed Nizarudeen </h1>
             <h2> Full Stack Developer </h2> 
             <p className="hero-description"> I build scalable web applications using React, Java, Spring Boot and modern cloud technologies. </p>
              <div className="hero-buttons"> 
                <a href="#projects" className="btn primary-btn" > View Projects </a> 
                <a href="/Mohamed_Nizarudeen_Resume.pdf" download className="btn secondary-btn" > Download Resume </a> 
                <a href="#contact" className="btn secondary-btn" > Contact Me </a> </div> 
                </div> {/* 3D Animation */} <Hero3D /> </div> 
                </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container">

            <p className="section-label">ABOUT ME</p>

            <h2 className="section-title">
              Building solutions with code
            </h2>

            <div className="about-content">
              <p>
                I'm a full-stack developer passionate about building
                reliable, scalable and user-friendly applications.
                My experience includes developing REST APIs and
                microservices using Java and Spring Boot along with
                modern frontend applications using React and TypeScript.
              </p>

              <p>
                I enjoy solving complex problems, learning new
                technologies and turning ideas into practical software
                solutions.
              </p>
            </div>

          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills-section">
          <div className="container">

            <p className="section-label">SKILLS</p>

            <h2 className="section-title">
              Technologies I work with
            </h2>

            <div className="skills-grid">

              <div className="skill-card">
                <h3>Frontend</h3>
                <p>React</p>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>HTML & CSS</p>
              </div>

              <div className="skill-card">
                <h3>Backend</h3>
                <p>Java</p>
                <p>Spring Boot</p>
                <p>REST APIs</p>
                <p>Microservices</p>
              </div>

              <div className="skill-card">
                <h3>Database</h3>
                <p>SQL Server</p>
                <p>Cassandra</p>
                <p>Azure Cosmos DB</p>
              </div>

              <div className="skill-card">
                <h3>Cloud & Tools</h3>
                <p>Microsoft Azure</p>
                <p>Git</p>
                <p>Docker</p>
                <p>CI/CD</p>
              </div>

            </div>

          </div>
        </section>

        {/* Projects */}
<section id="projects" className="section">
  <div className="container">

    <p className="section-label">PROJECTS</p>

    <h2 className="section-title">
      Some things I've built
    </h2>

    <div className="projects-grid">

      <article className="project-card">
        <h3>Booking Management System</h3>

        <p>
          A scalable Spring Boot microservices application
          for managing booking workflows and REST APIs.
        </p>

        <div className="project-tech">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>REST</span>
          <span>SQL</span>
        </div>
      </article>

      <article className="project-card">
        <h3>Contact Center Application</h3>

        <p>
          Backend services for user management, group
          management and contact center workflow integration.
        </p>

        <div className="project-tech">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>OpenFeign</span>
          <span>React</span>
        </div>
      </article>

      <article className="project-card">
        <h3>Task Management App</h3>

        <p>
          A task management application with REST APIs for
          creating, updating and tracking tasks.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>Spring Boot</span>
          <span>H2</span>
        </div>
      </article>

    </div>

  </div>
</section>

        {/* Contact */}
<section id="contact" className="section contact-section">
  <div className="container contact-container">

    <div className="contact-info">

      <p className="section-label">CONTACT</p>

      <h2 className="section-title">
        Let's work together
      </h2>

      <p>
        Have a project, job opportunity or just want to connect?
        Send me a message and I'll get back to you.
      </p>

    </div>

    <form className="contact-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="name">Name</label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn primary-btn">
        Send Message
      </button>

      {status && (
        <p className="form-status">
          {status}
        </p>
      )}

    </form>

  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">

          <p>
            © {new Date().getFullYear()} Mohamed Nizarudeen. All rights
            reserved.
          </p>

          <div className="social-links">
            <a href="https://github.com/MohamedNizarudeen" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/mohamed-nizarudeen-660646208/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
