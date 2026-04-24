import React from 'react';
import './App.css';

const App: React.FC = () => {
  const primaryColor = '#1C3F94';
  const sidebarHeadColor = '#1C3F94';
  const textColor = '#333333';
  const accentColor = '#555555';
  const ruleColor = '#E0E0E0';

  return (
    <div className="resume-container">
      {/* Two-column layout */}
      <div className="resume-layout">
        {/* Left Column (Sidebar) */}
        <div className="sidebar" style={{ borderRight: `1px solid ${ruleColor}` }}>
          {/* Profile Image */}
          <div className="profile-image">
            <img src="/photo.jpg" alt="Raghavendra Ojha" />
          </div>

          {/* Contact */}
          <div className="sidebar-section">
            <h3 style={{ color: sidebarHeadColor }}>CONTACT</h3>
            <p><strong>Phone</strong><br />+91 9696788858</p>
            <p><strong>Email</strong><br />
              <a href="mailto:raghavendraojha108@gmail.com">raghavendraojha108@gmail.com</a>
            </p>
            <p><strong>Location</strong><br />Prayagraj, Uttar Pradesh, India</p>
            <p><strong>LinkedIn</strong><br />
              <a href="https://linkedin.com/in/raghavendra-ojha-b061b5290" target="_blank" rel="noopener noreferrer">raghavendra-ojha</a>
            </p>
            <p><strong>GitHub</strong><br />
              <a href="https://github.com/raghvendraojha1008" target="_blank" rel="noopener noreferrer">raghvendraojha1008</a>
            </p>
          </div>

          {/* Education */}
          <div className="sidebar-section">
            <h3 style={{ color: sidebarHeadColor }}>EDUCATION</h3>
            <p>
              <strong>B.Tech – CSE (AI & ML)</strong><br />
              Chandigarh University<br />
              <em>2024 – 2028 (Expected)</em><br />
              Current Sem: 3rd
            </p>
            <p>
              <strong>Class XII</strong><br />
              JNV, Rewa<br />
              Score: 90.2%
            </p>
            <p>
              <strong>Class X</strong><br />
              JNV, Rewa<br />
              Score: 87%
            </p>
          </div>

          {/* Technical Skills */}
          <div className="sidebar-section">
            <h3 style={{ color: sidebarHeadColor }}>TECHNICAL SKILLS</h3>
            <p><strong>Languages</strong><br />Python, C, Java (Basic)</p>
            <p><strong>AI / ML</strong><br />ML Fundamentals, Data Preprocessing, Personalization Logic</p>
            <p><strong>Web Technologies</strong><br />HTML, CSS, React, TypeScript, Tailwind CSS</p>
            <p><strong>Core CS</strong><br />DSA, OS, TOC, Design & Analysis of Algorithms</p>
            <p><strong>Tools</strong><br />Git, GitHub, VS Code, Microsoft Excel</p>
            <p><strong>Hardware & IoT</strong><br />Arduino, Ultrasonic Sensors</p>
          </div>

          {/* Hobbies */}
          <div className="sidebar-section">
            <h3 style={{ color: sidebarHeadColor }}>HOBBIES</h3>
            <p>Chess, Badminton, Automation in Programming</p>
          </div>
        </div>

        {/* Right Column (Main Content) */}
        <div className="main-content">
          {/* Name and Title */}
          <div className="name-title">
            <h1 style={{ color: primaryColor }}>RAGHAVENDRA OJHA</h1>
            <h2 style={{ color: accentColor }}>CSE (AI & ML) Undergraduate</h2>
          </div>

          {/* Career Objective */}
          <div className="section">
            <h3 style={{ color: primaryColor, borderBottom: `2px solid ${primaryColor}` }}>CAREER OBJECTIVE</h3>
            <p>
              CSE (AI & ML) undergraduate with strong programming practice and hands‑on experience in AI/ML, software development, automation, web applications, and embedded systems. Seeking an AIML or software internship to apply problem‑solving and development skills.
            </p>
          </div>

          {/* Internship Experience */}
          <div className="section">
            <h3 style={{ color: primaryColor, borderBottom: `2px solid ${primaryColor}` }}>INTERNSHIP EXPERIENCE</h3>
            <div className="item">
              <div className="item-header">
                <strong>AI & Machine Learning Intern</strong>
                <span className="company">Achmegrade</span>
              </div>
              <div className="item-subtitle"><em>Remote Internship</em></div>
              <ul>
                <li>Worked on AI/ML fundamentals, data preprocessing, and model concepts.</li>
                <li>Gained exposure to real‑world AI workflows and analytical problem solving.</li>
              </ul>
            </div>
          </div>

          {/* Projects & Development Work */}
          <div className="section">
            <h3 style={{ color: primaryColor, borderBottom: `2px solid ${primaryColor}` }}>PROJECTS & DEVELOPMENT WORK</h3>
            
            <div className="item">
              <div className="item-header">
                <strong>Programming Practice Repository</strong>
                <span className="tech">Python/Logic</span>
              </div>
              <ul>
                <li>Created and maintained 550+ programming practice files.</li>
                <li>Strong focus on logic building, automation, and problem‑solving.</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-header">
                <strong>Application Development</strong>
              </div>
              <ul>
                <li><strong>Community Sharing App</strong> & <strong>Windows Timer Wallpaper App</strong>.</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-header">
                <strong>Web Development (AI‑Assisted)</strong>
              </div>
              <ul>
                <li>Built <strong>Nexon Chatbot</strong>, <strong>Image Converter</strong>, and <strong>Community Sharing</strong> websites.</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-header">
                <strong>Game Development</strong>
              </div>
              <ul>
                <li><strong>Space Invaders (Class XI):</strong> Fully functional 2D game developed using Python (Pygame).</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-header">
                <strong>Automation & Embedded Systems</strong>
              </div>
              <ul>
                <li><strong>Software:</strong> Multi‑Chain Coin Tracking & Offline‑first Inventory Ledger.</li>
                <li><strong>Hardware:</strong> Liquid Thrust Measuring Machine & Advanced Gate System (Arduino + Ultrasonic).</li>
              </ul>
            </div>
          </div>

          {/* Achievements & Activities */}
          <div className="section">
            <h3 style={{ color: primaryColor, borderBottom: `2px solid ${primaryColor}` }}>ACHIEVEMENTS & ACTIVITIES</h3>
            <ul>
              <li><strong>JEE Advanced:</strong> Scored 42 Marks in Physics.</li>
              <li><strong>Scout–Guide Certified:</strong> Tritiya Sopan Certified.</li>
              <li><strong>Trekking Program:</strong> Selected solely based on Scout–Guide performance for a 5‑day trekking & training program at Kullu–Manali, organized through school.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
