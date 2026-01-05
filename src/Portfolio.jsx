import React, { useState, useEffect } from 'react';
import profile from './assets/Image.jpg';
import { Github, Linkedin, Mail, Phone, ChevronDown, Code, Database, BarChart3, Sparkles, Target, Send } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'vision', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['Python', 'JavaScript', 'HTML/CSS', 'Java', 'SQL'],
    libraries: ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn'],
    frameworks: ['Flask', 'ReactJS', 'Tailwind', 'Bootstrap', "Streamlit", 'Langchain'],
    tools: ['MySQL', 'PostgreSQL', 'VS Code', 'Git', 'GitHub', 'Tableau', 'Power BI', 'Excel'],
    AIML: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'LLM', "Ollama"]
  };

  const projects = [
    {
      name: 'GraphiFY',
      tech: 'Python',
      description: 'A data visualization tool to generate interactive graphs from user data',
      details: 'User-friendly tool that allows uploading CSV and xlsx files to generate interactive and easy-to-interpret graphs',
      technologies: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Flask'],
      icon: <BarChart3 className="w-8 h-8" />,
      github: 'https://github.com/TheYashArt/GraphiFY.git'
    },
    {
      name: 'Blogs App',
      tech: 'React JS',
      description: 'A React-based application for user blogs',
      details: 'Social blog app that can manage blogs uploaded by users with full CRUD functionality',
      technologies: ['React JS', 'JavaScript', 'CSS'],
      icon: <Code className="w-8 h-8" />,
      github: 'https://github.com/TheYashArt/blogs-app.git'
    },
    {
      name: "PDFPulse",
      tech: 'Python',
      description: 'A PDF analysis tool using Langchain',
      details: 'Tool that analyzes PDFs and extracts information using Langchain',
      technologies: ['Python', 'Langchain', 'Groq', "Streamlit"],
      icon: <Sparkles className="w-8 h-8" />,
      github: 'https://github.com/TheYashArt/AskMyPDF.git',
      link: 'https://pdf-pulse.streamlit.app/'
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            YS
          </div>
          <div className="hidden md:flex md:gap-8">
            {['home', 'about', 'projects', 'vision', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 ${activeSection === section
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {section === 'about' ? 'About Me' : section === 'contact' ? 'Contact' : section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              {' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent animate-gradient">
                Yash Shelke
              </span>
            </h1>
            <p className="text-2xl text-slate-300">Data Analyst & Developer</p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Transforming data into actionable insights and building intuitive web applications.
              Passionate about data visualization, analytics, and creating seamless user experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/TheYashArt" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-purple-500 rounded-lg transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:shelkey810@gmail.com"
                className="p-3 bg-slate-800 hover:bg-fuchsia-500 rounded-lg transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Photo Placeholder */}

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 relative">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Code className="text-cyan-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-cyan-400">B.J. College Ale</p>
                    <p className="text-slate-300">BSc. Computer Science</p>
                    <p className="text-slate-400">2022 - 2025 | CGPA: 9.13/10.00</p>
                    <p className="text-sm text-slate-500">Affiliated by SPPU</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Database className="text-purple-400" />
                  Experience
                </h3>
                <div>
                  <p className="text-lg font-semibold text-purple-400">Codadhyay</p>
                  <p className="text-slate-300">ReactJS Developer Intern</p>
                  <p className="text-slate-400 mb-3">Jan 2025 – May 2025</p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• API integration, increasing data transfer efficiency by 40%</li>
                    <li>• Built and managed 4 projects during internship</li>
                    <li>• Improved logic building and team collaboration</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-fuchsia-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <BarChart3 className="text-fuchsia-400" />
                  Courses
                </h3>
                <div>
                  <p className="text-lg font-semibold text-fuchsia-400">Fortune Cloud</p>
                  <p className="text-slate-300">Data Science</p>
                  <p className="text-slate-400">May 2025 – Nov 2025</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-cyan-500/20 hover:border-cyan-500 border border-slate-700 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Libraries</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.libraries.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-purple-500/20 hover:border-purple-500 border border-slate-700 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Frameworks</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.frameworks.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-fuchsia-500/20 hover:border-fuchsia-500 border border-slate-700 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-emerald-500/20 hover:border-emerald-500 border border-slate-700 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">AI ML</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.AIML.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-emerald-500/20 hover:border-emerald-500 border border-slate-700 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <a href={project.github} target="_blank" rel="noopener noreferrer" key={i}>
                <div
                  key={i}
                  className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800 hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"

                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <p className="text-slate-400 text-sm">{project.tech}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <p className="text-slate-400 text-sm mb-6">{project.details}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-slate-800 rounded-full text-xs text-cyan-400 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <div className="px-3 mt-3 text-xl py-1 w-fit bg-slate-800 rounded-lg text-cyan-400 border border-slate-700">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 font-bold">Get Demo</a>
                    </div>
                  )}

                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="min-h-screen py-20 relative flex items-center">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              My Vision
            </h2>
            <Target className="w-16 h-16 mx-auto text-cyan-400 animate-pulse" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-800 hover:border-purple-500 transition-all duration-500">
              <p className="text-xl text-slate-300 leading-relaxed mb-6 text-center">
                To become a leading data scientist who bridges the gap between complex data analysis and
                actionable business insights. I envision creating innovative solutions that leverage
                machine learning and data visualization to solve real-world problems.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-3 group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400">Data Innovation</h3>
                  <p className="text-slate-400 text-sm">Building cutting-edge data solutions</p>
                </div>

                <div className="text-center space-y-3 group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">Clean Code</h3>
                  <p className="text-slate-400 text-sm">Writing maintainable, efficient code</p>
                </div>

                <div className="text-center space-y-3 group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400">Impact</h3>
                  <p className="text-slate-400 text-sm">Creating meaningful business value</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative flex items-center">
        <div className={`max-w-7xl mx-auto px-6 w-full transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-2xl border border-slate-800">
              <p className="text-center text-slate-300 mb-12 text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:shelkey810@gmail.com"
                  className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-lg font-semibold">shelkey810@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:9022397534"
                  className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-lg font-semibold">+91 9022397534</p>
                  </div>
                </a>

                <div className="pt-8 flex justify-center gap-6">
                  <a
                    href="https://github.com/TheYashArt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800 hover:bg-cyan-500 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-7 h-7" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800 hover:bg-purple-500 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                  <a
                    href="mailto:shelkey810@gmail.com"
                    className="p-4 bg-slate-800 hover:bg-fuchsia-500 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Send className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          <p>© 2025 Yash Shelke. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}