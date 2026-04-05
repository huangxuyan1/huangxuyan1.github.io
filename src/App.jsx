import { useEffect } from 'react'

/* ── DATA ── */
const RESEARCH = [
  {
    icon: '🔬',
    role: 'Research Assistant — OSU-MLB Lab',
    org: 'Advisor: Wei-Lun Chao · Ohio State University',
    period: 'Sep 2025 – Present',
    detail: 'Initiated an individual research project on synthetic music detection using foundation models. Collecting, labeling, and refining data for a benchmark paper submitted to ECCV 2026.',
  },
  {
    icon: '🤖',
    role: 'Research Assistant — NLP Lab',
    org: 'Advisor: Yu Su · Ohio State University',
    period: 'Aug 2024 – Oct 2024',
    detail: 'Identified and annotated risky behaviors for LLM-based web agents. Contributed to a workshop paper submitted to NeurIPS SafeGenAI Workshop 2024.',
  },
  {
    icon: '🛡️',
    role: 'Research Assistant — SecLab',
    org: 'Advisor: Zhiqiang Lin · Ohio State University',
    period: 'May 2024 – Apr 2025',
    detail: 'Analyzed mini-app behavior in unauthorized user fingerprinting. Implemented a system for identifying unauthorized fingerprinting behaviors in WeChat mini-apps.',
  },
]

const WORK = [
  {
    icon: '🏢',
    role: 'AI Research Intern',
    org: 'Union Mobile Financial Technology · China',
    period: 'May 2025 – Jul 2025',
    detail: 'Investigated open-source AI voiceover and music generation solutions. Trained and evaluated TTS models for voice actors. Experimented with open-source music generation models and designed domain-specific prompt templates and evaluation pipelines for LLM-based systems.',
  },
  {
    icon: '📐',
    role: 'Math Tutor',
    org: 'Mathematics & Statistics Learning Center · OSU',
    period: 'Aug 2024 – Dec 2024',
    detail: 'Organized tutoring sessions for Honors Calculus 1 and Calculus 1–3.',
  },
]

const ADDITIONAL = [
  {
    icon: '🚗',
    role: 'Buckeye AutoDrive',
    org: 'Ohio State University',
    period: 'Mar 2024 – Jun 2024',
    detail: 'Integrated V2X (Vehicle to Everything) into the perception pipeline. Predicted egressing lane information using V2X and waypoints from sensors.',
  },
  {
    icon: '🎵',
    role: 'Music Technology X Program',
    org: 'Tencent',
    period: 'Jul 2023 – Aug 2023',
    detail: 'Trained VISinger2 and SoftVC-VITS models on Tencent cloud servers. Developed a tool enabling VISinger2 inference on DiffSinger (.ds) files. Assisted with recording and preparing a custom singing dataset.',
  },
]

const AWARDS = [
  { title: 'HackAI 2024 Champion', detail: 'AI Club Track', date: 'Feb 2024' },
  { title: 'MakeOHI/O 2024 Winner', detail: 'Human-Centered Computing Challenge', date: 'Mar 2024' },
  { title: 'Buckeye Programming Competition', detail: '3rd Place', date: 'Feb 2024' },
  { title: 'ICPC North America Qualifier', detail: 'OSU 9th Place', date: 'Sep 2023' },
  { title: "Dean's List", detail: 'AU23 · SP24 · SU24 · AU24 · SP25 · AU25', date: 'Every semester' },
]

const SKILLS = [
  { label: 'Programming', tags: ['Python', 'Java', 'C++', 'Ruby'] },
  { label: 'ML Tools', tags: ['PyTorch', 'TensorFlow', 'CUDA', 'Slurm', 'HuggingFace'] },
  { label: 'Audio Tools', tags: ['Ableton', 'FFmpeg', 'Librosa', 'JUCE', 'Miditok'] },
  { label: 'Web & Other', tags: ['Ruby on Rails', 'Bootstrap', 'Git', 'Linux', 'SQLite', 'LaTeX'] },
]

/* ── SCROLL REVEAL HOOK ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── NAV ── */
function Nav() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        XH<span>.</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-tag">B.S. CSE · Ohio State · Graduating May 2026</div>
      <h1>
        Xuyan<br />
        <span className="accent">Huang</span>
      </h1>
      <p className="hero-subtitle">
        CS&amp;E undergraduate at <strong style={{ color: 'var(--text-primary)' }}>Ohio State</strong> with
        an AI specialization, interested in music generation, multimodal foundation models, and audio &amp; speech machine learning.
      </p>
      <div className="hero-buttons">
        <a href="#experience" className="btn-primary">Experience →</a>
        <a href="https://github.com/huangxuyan1" target="_blank" rel="noreferrer" className="btn-secondary">
          GitHub ↗
        </a>
        <a href="https://openreview.net/profile?id=~Xuyan_Huang1" target="_blank" rel="noreferrer" className="btn-secondary">
          OpenReview ↗
        </a>
      </div>
    </div>
  )
}

/* ── ABOUT ── */
function About() {
  return (
    <section id="about">
      <hr className="divider" style={{ marginBottom: '4rem' }} />
      <p className="section-label">01 / About</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I'm <strong style={{ color: 'var(--text-primary)' }}>Xuyan Huang</strong>, an undergraduate at
            The Ohio State University studying Computer Science &amp; Engineering with an
            AI specialization and a minor in General Psychology. I'll be graduating in May 2026
            with a GPA of 3.926 (Major: 3.946).
          </p>
          <p>
            My research spans music generation, multimodal foundation models, and audio &amp;
            speech machine learning. I'm currently working in the OSU-MLB Lab on synthetic music
            detection, and have previously worked in OSU's NLP and Security labs.
          </p>
          <p>
            Outside of research, I've competed in hackathons, tutored calculus, and have a deep
            background in music technology — from training singing voice synthesis models at Tencent
            to experimenting with LLM-based music systems in industry.
          </p>
        </div>
        <div className="skills-grid reveal" style={{ transitionDelay: '0.1s' }}>
          {SKILLS.map(group => (
            <div key={group.label}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-tags">
                {group.tags.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── EXPERIENCE ── */
function Experience() {
  return (
    <section id="experience">
      <hr className="divider" style={{ marginBottom: '4rem' }} />
      <p className="section-label">02 / Experience</p>
      <h2 className="section-title">Research &amp; Work</h2>

      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Research</p>
      <div className="resume-wrapper" style={{ marginBottom: '3rem' }}>
        {RESEARCH.map((e, i) => (
          <div key={e.role} className="resume-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="resume-card-header">
              <span className="resume-icon">{e.icon}</span>
              <span className="resume-role">{e.role}</span>
            </div>
            <div className="resume-org">{e.org}</div>
            <div className="resume-period">{e.period}</div>
            <div className="resume-detail">{e.detail}</div>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Work</p>
      <div className="resume-wrapper" style={{ marginBottom: '3rem' }}>
        {WORK.map((e, i) => (
          <div key={e.role} className="resume-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="resume-card-header">
              <span className="resume-icon">{e.icon}</span>
              <span className="resume-role">{e.role}</span>
            </div>
            <div className="resume-org">{e.org}</div>
            <div className="resume-period">{e.period}</div>
            <div className="resume-detail">{e.detail}</div>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Additional Technical</p>
      <div className="resume-wrapper">
        {ADDITIONAL.map((e, i) => (
          <div key={e.role} className="resume-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="resume-card-header">
              <span className="resume-icon">{e.icon}</span>
              <span className="resume-role">{e.role}</span>
            </div>
            <div className="resume-org">{e.org}</div>
            <div className="resume-period">{e.period}</div>
            <div className="resume-detail">{e.detail}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── RESUME / AWARDS ── */
function Resume() {
  return (
    <section id="resume">
      <hr className="divider" style={{ marginBottom: '4rem' }} />
      <p className="section-label">03 / Honors</p>
      <h2 className="section-title">Awards &amp; Recognition</h2>
      <div className="awards-list reveal">
        {AWARDS.map((a) => (
          <div key={a.title} className="award-row">
            <div className="award-left">
              <span className="award-title">{a.title}</span>
              <span className="award-detail">{a.detail}</span>
            </div>
            <span className="award-date">{a.date}</span>
          </div>
        ))}
      </div>
      <div className="resume-download-row">
        <a href="/Xuyan_Huang_CV__Website_Version_.pdf" target="_blank" className="btn-primary">
          Download Full CV ↓
        </a>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer>
      <span className="footer-copy">© {new Date().getFullYear()} Xuyan Huang</span>
      <div className="footer-links">
        <a href="https://github.com/huangxuyan1" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://openreview.net/profile?id=~Xuyan_Huang1" target="_blank" rel="noreferrer">OpenReview</a>
        <a href="mailto:huang.5197@osu.edu">Email</a>
      </div>
    </footer>
  )
}

/* ── APP ── */
export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Resume />
      <Footer />
    </>
  )
}