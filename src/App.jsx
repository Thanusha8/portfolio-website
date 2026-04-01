import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    dashboards: 0,
    webapps: 0,
    lines: 0,
    publications: 0
  });

  useEffect(() => {
    const targets = {
      years: 2,
      projects: 5,
      dashboards: 15,
      webapps: 15,
      lines: 50,
      publications: 2
    };

    let mounted = true;
    let interval;

    const startCounter = () => {
      let current = { years: 0, projects: 0, dashboards: 0, webapps: 0, lines: 0, publications: 0 };
      
      interval = setInterval(() => {
        if (!mounted) return;
        
        let allComplete = true;
        const newCounters = { ...current };
        
        Object.keys(targets).forEach(key => {
          if (current[key] < targets[key]) {
            allComplete = false;
            newCounters[key] = Math.min(current[key] + 1, targets[key]);
          }
        });
        
        current = newCounters;
        setCounters(current);
        
        if (allComplete) {
          clearInterval(interval);
        }
      }, 80);
    };
    
    startCounter();

    return () => {
      mounted = false;
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      {/* ========== NAVBAR ========== */}
      <nav className="navbar">
        <div className="nav-container">
          <a className="nav-logo" href="#home">Thanusha Udara</a>
          <div className="nav-menu">
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-left">
            <h1>Thanusha Udara</h1>
            <p className="hero-subtitle">Fusing Data with Intelligence Precision</p>
            <div className="hero-buttons">
              <a href="/portfolio-website/assets/Thanusha_Udara_CV.pdf" className="btn-primary" download>Download CV</a>
              <a href="https://github.com/Thanusha8" className="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <img 
                src="/portfolio-website/assets/hero-image.png" 
                alt="Thanusha Udara"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/hero-image.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="about" id="about">
        <div className="container">
          <h2>About Me</h2>
          <p className="section-tagline">Passionate AI/ML Engineer | Data Analyst at John Keells Properties</p>
          
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="/portfolio-website/assets/about-image.png" 
                alt="Thanusha Udara"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/about-image.png";
                }}
              />
            </div>
            <div className="about-text">
              <p>I'm a passionate AI/ML Engineer with a strong background in data analysis, currently working as a Data Analyst at John Keells Properties. I specialize in building machine learning models, developing AI-powered applications, statistical modeling, and performing advanced data analysis to drive business decisions.</p>
              <p>My expertise spans across Large Language Models (LLMs), RAG systems, supervised & unsupervised learning, and MLOps. I'm deeply passionate about transforming complex data into intelligent solutions that create real-world impact. Currently pursuing BSc (Hons) in Data Science at Cardiff Metropolitan University, I continuously explore cutting-edge AI technologies to solve challenging problems.</p>
              <p>With hands-on experience in Python, R, SQL, and modern AI frameworks, I build scalable solutions that bridge the gap between data science and practical applications. I'm driven by the mission to make AI accessible and impactful across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CAREER HIGHLIGHTS ========== */}
      <section className="highlights">
        <div className="container">
          <h2>Career Highlights</h2>
          <p className="section-tagline">Building scalable AI solutions and delivering impactful data-driven results</p>
          <div className="highlights-grid">
            
            <div className="highlight-card">
              <div className="highlight-value">{counters.projects}+</div>
              <div className="highlight-label">AI/ML Projects</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-value">{counters.dashboards}+</div>
              <div className="highlight-label">Power BI Dashboards</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-value">{counters.webapps}+</div>
              <div className="highlight-label">Web Applications</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-value">{counters.lines}k+</div>
              <div className="highlight-label">Lines of Code</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ========== FEATURED PROJECTS ========== */}
      <section className="projects" id="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-tagline">Delivering AI/ML systems and data solutions that solve complex challenges</p>
          
          <div className="projects-grid-three">
            {/* Project 1 - EduSmart-AI */}
            <div className="project-card-small">
              <div className="project-image-small">
                <img 
                  src="/portfolio-website/assets/project1.png" 
                  alt="EduSmart-AI"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/project1.png";
                  }}
                />
              </div>
              <h3>EduSmart-AI</h3>
              <p className="project-location-small">AI-Powered Learning Assistant</p>
              <p className="project-description-small">
                AI-powered learning assistant enabling students to upload documents, ask questions, generate quizzes, and track progress. Implemented role-based authentication, vector search, and AI-powered QA with Groq LLaMA.
              </p>
              <div className="project-tech-small">
                <span>Python</span>
                <span>FastAPI</span>
                <span>Streamlit</span>
                <span>Pinecone</span>
                <span>LLM</span>
                <span>RAG</span>
              </div>
              <div className="project-buttons">
                <a href="https://github.com/Thanusha8/EduSmart-AI.git" className="project-btn" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>

            {/* Project 2 - ML-Movie-Recommender */}
            <div className="project-card-small">
              <div className="project-image-small">
                <img 
                  src="/portfolio-website/assets/project2.png" 
                  alt="ML-Movie-Recommender"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/project2.png";
                  }}
                />
              </div>
              <h3>ML-Movie-Recommender</h3>
              <p className="project-location-small">Content-Based Recommendation System</p>
              <p className="project-description-small">
                Content-based movie recommender system using 10,000 movies. Interactive Streamlit app with movie selection dropdown, top-5 recommendations, and poster display via TMDb API.
              </p>
              <div className="project-tech-small">
                <span>Python</span>
                <span>Streamlit</span>
                <span>scikit-learn</span>
                <span>TMDb API</span>
                <span>Machine Learning</span>
              </div>
              <div className="project-buttons">
                <a href="https://github.com/Thanusha8/ML-Movie-Recommender.git" className="project-btn" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>

            {/* Project 3 - Sales-Analysis-SQL-Power-BI */}
            <div className="project-card-small">
              <div className="project-image-small">
                <img 
                  src="/portfolio-website/assets/project3.png" 
                  alt="Sales Analysis SQL Power BI"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/project3.png";
                  }}
                />
              </div>
              <h3>Sales Analysis SQL Power BI</h3>
              <p className="project-location-small">End-to-End Data Analytics</p>
              <p className="project-description-small">
                Comprehensive data analysis using SQL for querying and Power BI for interactive dashboard. Analyzed KPIs, revenue trends, best-selling products, and customer preferences for pizza sales.
              </p>
              <div className="project-tech-small">
                <span>SQL</span>
                <span>Power BI</span>
                <span>DAX</span>
                <span>Data Analytics</span>
              </div>
              <div className="project-buttons">
                <a href="https://github.com/Thanusha8/Sales-Analysis-SQL-Power-BI.git" className="project-btn" target="_blank" rel="noopener noreferrer">GitHub →</a>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiZDhlN2RlYmYtMGRhZC00MTI1LWI5YWQtNWY1YWZjNGVkNTZlIiwidCI6IjE4OWRjNjFjLTc2OWItNDA0OC04YjBmLTZkZTA3NGJiYTI2YyIsImMiOjh9" className="project-btn" target="_blank" rel="noopener noreferrer">Dashboard →</a>
              </div>
            </div>

            {/* Project 4 - Blockchain-Tender-DApp */}
            <div className="project-card-small">
              <div className="project-image-small">
                <img 
                  src="/portfolio-website/assets/project4.png" 
                  alt="Blockchain Tender DApp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/project4.png";
                  }}
                />
              </div>
              <h3>Blockchain Tender DApp</h3>
              <p className="project-location-small">Decentralized Tender Management</p>
              <p className="project-description-small">
                Decentralized Ethereum-based application for managing tenders and contracts. Enables transparent bidding, voting, and automatic winner selection using smart contracts.
              </p>
              <div className="project-tech-small">
                <span>Solidity</span>
                <span>React.js</span>
                <span>Web3.js</span>
                <span>Ethereum</span>
                <span>Smart Contracts</span>
              </div>
              <div className="project-buttons">
                <a href="https://github.com/Thanusha8/Blockchain-Tender-DApp.git" className="project-btn" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>

            {/* Project 5 - Leads Analytics Dashboard */}
            <div className="project-card-small">
              <div className="project-image-small">
                <img 
                  src="/portfolio-website/assets/project5.png" 
                  alt="Leads Analytics Dashboard"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/project5.png";
                  }}
                />
              </div>
              <h3>Leads Analytics Dashboard</h3>
              <p className="project-location-small">John Keells Properties</p>
              <p className="project-description-small">
                Automated weekly reporting with 6-page Power BI dashboard connected to 7 data sources for real-time lead tracking. Enabled instant insights into lead types, statuses, and advisor performance.
              </p>
              <div className="project-tech-small">
                <span>Power BI</span>
                <span>SQL</span>
                <span>Data Analytics</span>
                <span>Dashboard</span>
              </div>
              {/* No button for Leads Analytics Dashboard as requested */}
            </div>

            {/* Project 6 - R-Auto-Market-Analytics */}
            <div className="project-card-small">
              <div className="project-image-small">
                <img 
                  src="/portfolio-website/assets/project6.png" 
                  alt="R Auto Market Analytics"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/project6.png";
                  }}
                />
              </div>
              <h3>R Auto Market Analytics</h3>
              <p className="project-location-small">Statistical Analysis</p>
              <p className="project-description-small">
                Statistical analysis on automobile data to identify features influencing vehicle price. Applied descriptive statistics, ANOVA, correlation, and regression analysis for strategic decision-making.
              </p>
              <div className="project-tech-small">
                <span>R</span>
                <span>ggplot2</span>
                <span>dplyr</span>
                <span>Statistical Analysis</span>
                <span>ANOVA</span>
              </div>
              <div className="project-buttons">
                <a href="https://github.com/Thanusha8/R-Auto-Market-Analytics.git" className="project-btn" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXPERTISE & FOCUS ========== */}
      <section className="expertise" id="expertise">
        <div className="container">
          <h2>Expertise & Focus</h2>
          <p className="section-tagline">Bridging AI research with industrial-scale data solutions</p>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Machine Learning & Deep Learning</h3>
              <p>Expertise in supervised & unsupervised learning, SVM, ensemble methods, CNNs, RNNs, and transformer architectures using Python, scikit-learn, and TensorFlow.</p>
            </div>
            
            <div className="expertise-card">
              <h3>LLMs & Generative AI</h3>
              <p>Advanced experience with Large Language Models, RAG systems, LangChain, Groq LLaMA, vector search with Pinecone, and building intelligent AI applications.</p>
            </div>
            
            <div className="expertise-card">
              <h3>ML Engineering & MLOps</h3>
              <p>Building scalable ML systems with Docker, FastAPI, Streamlit, and cloud deployment. Experience with CI/CD pipelines and production-ready AI applications.</p>
            </div>
            
            <div className="expertise-card">
              <h3>Data Analytics & Visualization</h3>
              <p>Expert in Power BI, Tableau, SQL, and statistical modeling. Creating interactive dashboards and deriving actionable insights from complex datasets.</p>
            </div>
            
            <div className="expertise-card">
              <h3>Blockchain & Web3</h3>
              <p>Solidity smart contracts, Ethereum, Web3.js, decentralized applications (DApps), and blockchain-based tender management systems.</p>
            </div>
            
            <div className="expertise-card">
              <h3>Data Engineering</h3>
              <p>ETL pipelines, data preprocessing, MongoDB, Pinecone vector databases, and turning raw data into production-ready solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta" id="contact">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <div className="cta-image">
            <img 
              src="/portfolio-website/assets/cta-image.png" 
              alt="Let's Build What Matters"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/cta-image.png";
              }}
            />
          </div>
          <h2>Let's Build What Matters</h2>
          <p>Whether you are looking to scale your AI capabilities, build intelligent ML systems, or transform data into actionable insights, I'm here to help turn your vision into reality</p>
          <div className="cta-buttons">
            <a href="mailto:thanushaudara8@gmail.com" className="cta-email">Email Me</a>
            <a href="https://www.linkedin.com/in/thanusha-udara/" className="cta-linkedin" target="_blank">Connect on LinkedIn</a>
          </div>
          <p className="cta-signature">Thanusha Udara</p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-content">
          <p>Bridging data and intelligence through advanced AI and machine learning solutions</p>
          <div className="footer-bottom">
            <p>© 2026 Thanusha Udara · All rights reserved</p>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#expertise">Expertise</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/thanusha-udara/" target="_blank">LinkedIn</a>
              <a href="https://github.com/Thanusha8" target="_blank">GitHub</a>
              <a href="mailto:thanushaudara8@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;