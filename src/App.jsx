function App() {
  return (
    <>
      {/* ================= NAVIGATION ================= */}
      <nav className="navbar">
        <div className="logo">My Portfolio</div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ================= HOME ================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Marielle P. Ditoya</span>
          </h1>

          <p className="description">
            An IT student who is passionate about learning,
            exploring technology, and developing skills through
            creative projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#resume" className="btn btn-outline">
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">
        <div className="section-container">
          <h2>About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I am an Information Technology student with an interest
                in web development and programming. I am continuously
                learning and developing my technical skills through
                academic projects and hands-on experience.
              </p>

              <p>
                My goal is to continue improving my programming skills
                and become a professional web developer in the future.
              </p>
            </div>

            <div className="skills">
              <h3>My Skills</h3>

              <div className="skill-list">
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">JavaScript</div>
                <div className="skill">Creativity</div>
                <div className="skill">Collaboration</div>
                <div className="skill">Critical Thinking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2>My Projects</h2>

          <div className="project-container">

            {/* CALCULATOR */}
            <div className="project-card">
              <div className="project-number">01</div>

              <h3>Calculator</h3>

              <p>
                A simple calculator application that performs
                basic mathematical operations such as addition,
                subtraction, multiplication, and division.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                href="https://lab1-reactcalculator-1tdpti50z-dcit-28.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>

            {/* TODO LIST */}
            <div className="project-card">
              <div className="project-number">02</div>

              <h3>Todo List</h3>

              <p>
                A simple task management application that allows
                users to add, complete, and manage their daily tasks.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                href="https://lab2-todo-list-vtiv-4zt3safjc-dcit-28.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RESUME ================= */}
      <section id="resume" className="resume">
        <div className="section-container">
          <h2>My Resume</h2>

          <div className="resume-card">

            <div className="resume-header">
              <h3>Marielle P. Ditoya</h3>

              <p>Web Developer | Student | Designer</p>
            </div>

            <div className="resume-section">
              <h4>Education</h4>

              <p>
                <strong>
                  Bachelor of Science in Information Technology
                </strong>
                <br />
                Cavite State University-Tanza Campus
                <br />
                2024 - Present
              </p>
            </div>

            <div className="resume-section">
              <h4>Skills</h4>

              <p>
                HTML, CSS, JavaScript, Creativity,
                Collaboration, Critical Thinking
              </p>
            </div>

            <div className="resume-section">
              <h4>Experience</h4>

              <p>
                <strong>Student Web Developer</strong>
                <br />
                Created websites and web applications for academic
                and personal projects.
              </p>
            </div>

            <div className="resume-section">
              <h4>Career Objective</h4>

              <p>
                To continuously improve my skills in programming
                and technology while gaining experience through
                school projects, teamwork, and hands-on learning.
              </p>
            </div>

            <a
              href="/resume.pdf"
              download="Marielle-P-Ditoya-Resume.pdf"
              className="btn"
            >
              Download Resume
            </a>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2>Contact Me</h2>

          <div className="contact-card">

            <p>
              <strong>Email:</strong>{" "}
              marielle.ditoya@cvsu.edu.ph
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              09919223114
            </p>

            <p>
              <strong>Location:</strong>{" "}
              Philippines
            </p>

            <a
              href="mailto:marielle.ditoya@cvsu.edu.ph"
              className="btn"
            >
              Send Me an Email
            </a>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>
          © 2026 Marielle P. Ditoya. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;