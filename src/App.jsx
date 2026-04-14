import { useState, useEffect, useRef } from "react";
import { Github, Mail, ExternalLink, ChevronDown, Code2, Database, Server, Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-40px)", right: "translateX(40px)" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
    }}>{children}</div>
  );
};

const skills = [
  { name: "HTML5", icon: "🌐", color: "#e34c26" },
  { name: "CSS3", icon: "🎨", color: "#264de4" },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e" },
  { name: "TypeScript", icon: "🔷", color: "#3178c6" },
  { name: "React JS", icon: "⚛️", color: "#61dafb" },
  { name: "Tailwind CSS", icon: "💨", color: "#38bdf8" },
  { name: "Node JS", icon: "🟢", color: "#339933" },
  { name: "MongoDB", icon: "🍃", color: "#47a248" },
  { name: "Redis", icon: "🔴", color: "#d82c20" },
  { name: "Three JS", icon: "🔺", color: "#ffffff" },
  { name: "Git", icon: "🔀", color: "#f05032" },
];

const projects = [
  {
    title: "Fixlet Fast",
    desc: "A MERN stack application designed for fast and efficient service booking and management. Features state management with Redux Toolkit and high-performance caching with Redis database.",
    tags: ["React", "Redux Toolkit", "Redis", "MongoDB", "Node.js"],
    icon: "⚡",
    accent: "#f59e0b",
    link: "https://fixletfast.vercel.app/",
  },
  {
    title: "Charcha Chat",
    desc: "A real-time chat application built with MERN stack and Socket.io. Features instant messaging, user authentication, and WebRTC-powered voice and video call capabilities.",
    tags: ["React", "WebRTC", "Socket.io", "Express"],
    icon: "💬",
    accent: "#8b5cf6",
    link: "https://charchamern.vercel.app/",
  },
  {
    title: "Study Manager",
    desc: "A comprehensive academic management system with AI-powered features. Uses Gemini AI to generate personalized interview questions and learning roadmaps for students to track courses, assignments, and grades efficiently.",
    tags: ["React", "Gemini AI", "MERN", "CSS"],
    icon: "📚",
    accent: "#10b981",
    link: "https://study-manager-tan.vercel.app/",
  },
  {
    title: "50+ Mini Projects",
    desc: "A collection of 50+ mini projects showcasing hands-on experience with React, Node.js, JavaScript, and various web technologies. Each project demonstrates different skills and features.",
    tags: ["React", "JavaScript", "Node.js", "Web Dev"],
    icon: "🚀",
    accent: "#ef4444",
    link: "https://github.com/sumit8104608630?tab=repositories",
  },
];

const roles = ["Full Stack Developer", "React Developer", "Backend Developer", "MERN Stack Specialist"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setRoleVisible(true); }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <div style={{ background: "#0a0a0f", color: "#e8e6f0", fontFamily: "'Nunito', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 2px; }
        .nav-link { cursor: pointer; font-size: 13px; font-weight: 500; color: #9991b5; transition: color 0.2s; letter-spacing: 0.04em; text-transform: uppercase; }
        .nav-link:hover { color: #e8e6f0; }
        .btn-primary { background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; border: none; padding: 12px 28px; border-radius: 6px; font-weight: 600; font-size: 14px; cursor: pointer; transition: opacity 0.2s, transform 0.2s; font-family: inherit; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .skill-chip { border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 12px 16px; text-align: center; transition: border-color 0.3s, transform 0.3s; cursor: default; }
        .skill-chip:hover { border-color: rgba(168,85,247,0.5); transform: translateY(-4px); }
        .project-card { background: #13121e; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px; transition: border-color 0.3s, transform 0.3s; }
        .project-card:hover { border-color: rgba(168,85,247,0.3); transform: translateY(-6px); }
        .tag { font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(168,85,247,0.3); color: #a855f7; letter-spacing: 0.05em; background: rgba(168,85,247,0.07); }
        .form-input { width: 100%; background: #13121e; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 13px 16px; color: #e8e6f0; font-family: inherit; font-size: 14px; outline: none; transition: border-color 0.2s; }
        .form-input:focus { border-color: rgba(168,85,247,0.5); }
        .form-input::placeholder { color: #4e4a6a; }
        textarea.form-input { resize: none; }
        .accent-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #a855f7; margin-right: 8px; }
        .section-label { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #a855f7; display: flex; align-items: center; margin-bottom: 16px; }
        .glow { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
        .hero-name { font-family: 'Poppins', sans-serif; font-weight: 800; line-height: 1.05; letter-spacing: -0.03em; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .floating { animation: float 4s ease-in-out infinite; }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.6); opacity: 0; } }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor { animation: blink 1s step-end infinite; }
        .grid-bg { background-image: linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px); background-size: 48px 48px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 5%",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px"
      }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 20, color: "#a855f7" }}>
          S
        </span>
        <div style={{ display: "flex", gap: 36 }} className="hidden md:flex">
          {["about", "work", "contact"].map(s => (
            <span key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</span>
          ))}
        </div>
        <button className="btn-primary" style={{ padding: "8px 20px", fontSize: 13 }} onClick={() => scrollTo("contact")}>
          Hire me
        </button>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "80px 5% 60px" }} className="grid-bg">
        <div className="glow" style={{ width: 500, height: 500, background: "rgba(124,58,237,0.12)", top: "10%", left: "5%" }} />
        <div className="glow" style={{ width: 300, height: 300, background: "rgba(168,85,247,0.08)", bottom: "10%", right: "10%" }} />

        <div style={{ maxWidth: 900, width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, opacity: 0, animation: "fadeUp 0.7s 0.1s forwards" }}>
            <div style={{ position: "relative" }}>
              <div className="pulse-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid #a855f7" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#a855f7" }} />
            </div>
            <span style={{ fontSize: 13, color: "#9991b5", fontWeight: 500, letterSpacing: "0.06em" }}>AVAILABLE FOR WORK</span>
          </div>

          <h1 className="hero-name" style={{ fontSize: "clamp(48px, 9vw, 90px)", color: "#e8e6f0", opacity: 0, animation: "fadeUp 0.7s 0.2s forwards" }}>
            Hi, I'm<br />
            <span style={{ background: "linear-gradient(135deg, #c084fc, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sumit</span>
          </h1>

          <div style={{ height: 36, display: "flex", alignItems: "center", opacity: 0, animation: "fadeUp 0.7s 0.35s forwards" }}>
            <span style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "#9991b5", fontWeight: 400 }}>
              <span style={{ color: "#a855f7", opacity: roleVisible ? 1 : 0, transition: "opacity 0.4s", fontWeight: 600 }}>{roles[roleIdx]}</span>
              <span className="cursor" style={{ color: "#a855f7", marginLeft: 2 }}>|</span>
            </span>
          </div>

          <p style={{ fontSize: 16, color: "#706a92", lineHeight: 1.75, maxWidth: 540, opacity: 0, animation: "fadeUp 0.7s 0.45s forwards" }}>
            I build full-stack web applications with the MERN stack — scalable, performant, and user-friendly. Let's turn your ideas into reality.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.7s 0.55s forwards" }}>
            <button className="btn-primary" onClick={() => scrollTo("work")}>View my work</button>
            <button style={{ background: "transparent", border: "1px solid rgba(168,85,247,0.3)", color: "#a855f7", padding: "12px 24px", borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
              onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </div>

          <div style={{ display: "flex", gap: 16, opacity: 0, animation: "fadeUp 0.7s 0.65s forwards" }}>
            <a href="https://github.com/sumit8104608630" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "border-color 0.2s, background 0.2s", background: "transparent", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)"; e.currentTarget.style.background = "rgba(168,85,247,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}>
              <Github size={16} color="#9991b5" />
            </a>
            <a href="https://www.linkedin.com/in/sumit-sharma-204842223/" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "border-color 0.2s, background 0.2s", background: "transparent", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)"; e.currentTarget.style.background = "rgba(168,85,247,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#9991b5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://leetcode.com/u/sumit81046/" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "border-color 0.2s, background 0.2s", background: "transparent", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)"; e.currentTarget.style.background = "rgba(168,85,247,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}>
              <TbBrandLeetcode size={16} color="#9991b5" />
            </a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", opacity: 0, animation: "fadeUp 0.7s 0.9s forwards" }} className="floating">
          <ChevronDown size={20} color="#4e4a6a" />
        </div>

        <style>{`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* ABOUT / SKILLS */}
      <section id="about" style={{ padding: "100px 5%", position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: 400, height: 400, background: "rgba(124,58,237,0.07)", top: "50%", right: "-5%" }} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <span className="section-label"><span className="accent-dot" />About me</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, marginBottom: 24, color: "#e8e6f0" }}>
              Building the web,<br />one stack at a time
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 15, color: "#706a92", lineHeight: 1.85, maxWidth: 620, marginBottom: 40 }}>
              I'm a skilled MERN Stack Developer with experience in building full-stack web applications. I specialize in JavaScript and have expertise in frameworks like React, Node.js, and Express, along with MongoDB for database management. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 60 }}>
              <a href="https://leetcode.com/u/sumit81046/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", padding: "16px 24px", background: "#13121e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, textAlign: "center", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#a855f7", fontFamily: "'Poppins', sans-serif" }}>325+</div>
                <div style={{ fontSize: 12, color: "#706a92", marginTop: 4 }}>Problems Solved</div>
              </a>
              <a href="https://github.com/sumit8104608630" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", padding: "16px 24px", background: "#13121e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, textAlign: "center", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#a855f7", fontFamily: "'Poppins', sans-serif" }}>65+</div>
                <div style={{ fontSize: 12, color: "#706a92", marginTop: 4 }}>GitHub Repos</div>
              </a>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 60, maxWidth: 480 }}>
            {[
              { icon: <Code2 size={18} color="#a855f7" />, title: "Frontend", desc: "React, Tailwind, Three.js" },
              { icon: <Server size={18} color="#a855f7" />, title: "Backend", desc: "Node.js, Express.js" },
              { icon: <Database size={18} color="#a855f7" />, title: "Database", desc: "MongoDB" },
              { icon: <Globe size={18} color="#a855f7" />, title: "Full Stack", desc: "MERN Specialist" },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div style={{ background: "#13121e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 20 }}>
                  <div style={{ marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#e8e6f0", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "#706a92" }}>{item.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <span className="section-label"><span className="accent-dot" />Tech stack</span>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: 12 }}>
            {skills.map((skill, i) => (
              <FadeIn key={skill.name} delay={0.04 * i}>
                <div className="skill-chip" style={{ background: "#13121e" }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{skill.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#9991b5", letterSpacing: "0.03em" }}>{skill.name}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" style={{ padding: "100px 5%", background: "#0d0c17", position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: 500, height: 300, background: "rgba(124,58,237,0.06)", top: 0, left: "30%" }} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <span className="section-label"><span className="accent-dot" />Projects</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, marginBottom: 16, color: "#e8e6f0" }}>
              Things I've built
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 15, color: "#706a92", lineHeight: 1.75, maxWidth: 560, marginBottom: 60 }}>
              Real-world projects that showcase problem-solving, technical depth, and my ability to ship end-to-end products.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {projects.map((p, i) => (
              <FadeIn key={p.title} delay={0.15 * i} direction={i % 2 === 0 ? "left" : "right"}>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                  <div className="project-card" style={{ height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.accent}18`, border: `1px solid ${p.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                        {p.icon}
                      </div>
                      <ArrowUpRight size={16} color="#4e4a6a" />
                    </div>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: "#e8e6f0", marginBottom: 10 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: "#706a92", lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5%", position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: 400, height: 400, background: "rgba(124,58,237,0.09)", bottom: 0, left: "50%", transform: "translateX(-50%)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <FadeIn>
            <span className="section-label" style={{ justifyContent: "center" }}><span className="accent-dot" />Contact</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, marginBottom: 16, color: "#e8e6f0", textAlign: "center" }}>
              Let's work together
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 15, color: "#706a92", lineHeight: 1.75, textAlign: "center", marginBottom: 48 }}>
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something great.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input className="form-input" placeholder="Your name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                <input className="form-input" placeholder="Your email" type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
              </div>
              <textarea className="form-input" rows={5} placeholder="Your message..." value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
              <button className="btn-primary" style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 8 }}
                onClick={() => alert("Message sent! (wire this to your backend 🚀)")}>
                <Mail size={15} />
                Send message
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "28px 5%", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18 }}>S<span style={{ color: "#a855f7" }}>.</span></span>
        <span style={{ fontSize: 13, color: "#4e4a6a" }}>© 2025 Sumit · Built with React & Tailwind</span>
        <div style={{ display: "flex", gap: 16 }}>
          {[Github, Mail].map((Icon, i) => (
            <Icon key={i} size={16} color="#4e4a6a" style={{ cursor: "pointer" }} />
          ))}
        </div>
      </footer>
    </div>
  );
}
