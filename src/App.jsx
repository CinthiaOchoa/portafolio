import { useEffect, useState } from 'react'

const RESUME_PATH = './Cinthia_Ochoa_Torre_Resume.pdf'
const LINKEDIN_URL = 'https://www.linkedin.com/in/cinthia-m-ochoa-torre/'
const EMAIL = 'cinthia.ochoatorre@gmail.com'
const PHONE = '(425) 480-0689'

const NAV_ITEMS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

const SKILL_GROUPS = [
  { title: 'Languages', tags: ['SQL', 'Python', 'R', 'Java'] },
  { title: 'Data & analytics', tags: ['Pandas', 'NumPy', 'Data cleaning', 'EDA', 'Statistical analysis', 'Hypothesis testing'] },
  { title: 'Databases', tags: ['MySQL', 'Snowflake', 'Data modeling (3NF)', 'SQL optimization'] },
  { title: 'Machine learning & AI', tags: ['Predictive analytics', 'Feature engineering', 'Model evaluation', 'AI ethics & fairness'] },
  { title: 'Data engineering', tags: ['ETL basics', 'Data pipelines', 'Data validation', 'Data quality management'] },
  { title: 'Visualization & reporting', tags: ['Excel', 'Dashboards', 'Data storytelling', 'Business reporting'] },
  { title: 'Cloud & APIs', tags: ['REST APIs', 'API integration', 'Azure fundamentals'] },
  { title: 'Testing & professional', tags: ['Debugging', 'UAT', 'Root cause analysis', 'Cross-functional collaboration'] },
]

const PROJECTS = [
  {
    title: 'Type 2 diabetes polygenic risk score (PRS) analysis',
    date: 'Summer 2026',
    points: [
      'Analyzed Type 2 diabetes polygenic risk scores across Latino and European populations using population-scale genetic datasets.',
      'Applied Python, data preprocessing, and EDA to prepare and validate research data.',
      'Evaluated predictive model performance, fairness, and bias across demographic groups.',
      'Built visualizations and reports on AI-driven healthcare prediction and health equity.',
    ],
  },
  {
    title: 'Grocery planning system',
    date: 'Spring 2026',
    points: [
      'Designed a relational database with normalized schemas (3NF) for data integrity.',
      'Wrote SQL queries (JOIN, LEFT JOIN, GROUP BY, HAVING) for validation and business logic.',
      'Built logic to flag missing data and calculate required costs, simulating completeness checks.',
      'Integrated frontend and backend with REST APIs for real-time validation and updates.',
      'Led frontend wireframing and UI implementation; debugged data flow across all layers.',
    ],
  },
  {
    title: 'Data quality & validation project',
    date: 'Spring 2026',
    points: [
      'Cleaned and preprocessed data by handling missing values, duplicates, and inconsistencies.',
      'Implemented validation checks for accuracy, completeness, and consistency.',
      'Applied transformation and filtering logic using Pandas and SQL.',
      'Designed rule-based validation steps simulating real-world data quality workflows.',
    ],
  },
]

const EXPERIENCE = [
  {
    role: 'Student technical support',
    org: 'Georgia State University · Atlanta, GA · March 2026 – Present',
    points: [
      'Provide Tier 1 technical support troubleshooting hardware, software, and network issues for faculty, staff, and students.',
      'Set up and maintain classroom technology and recording systems for academic and professional events.',
    ],
  },
  {
    role: 'Student assistant',
    org: 'Georgia State University · Atlanta, GA · September 2025 – March 2026',
    points: [
      'Entered and maintained project data in renovation management systems and Excel across 100+ client records.',
      'Streamlined file organization, cutting clerical errors by 15%.',
      'Tracked project activity, contributing to 10+ departmental projects completed on schedule each semester.',
    ],
  },
  {
    role: 'IT service desk agent',
    org: 'Edmonds College · Lynnwood, WA · August 2023 – June 2024',
    points: [
      'Supported students and staff via Zoom, Google Meet, and email with troubleshooting guidance.',
      'Managed Google Apps, Canvas, and campus technology support.',
      'Processed EdPass ID cards and transit passes; maintained computer labs for accessibility.',
    ],
  },
]

const LEADERSHIP = [
  {
    role: 'Volunteer',
    org: 'Georgia Aquarium · Atlanta, GA · November 2025 – Present',
    points: ['Welcomed 1,000+ guests, provided directions, and facilitated presentations for a positive visitor experience.'],
  },
  {
    role: 'Orientation leader',
    org: 'Georgia State University · January 2025 – August 2025',
    points: ['Led onboarding for 200+ incoming students and families through tours, Q&A, and themed programming.'],
  },
]

function useTypewriter(lines, speed = 22) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const full = lines.join('\n')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOutput(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [])

  return { output, done }
}

function Terminal() {
  const query = [
    'SELECT name, role, focus',
    'FROM   data_scientists',
    "WHERE  curiosity = TRUE;",
  ]
  const { output, done } = useTypewriter(query)

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
        <span className="terminal-title">query.sql</span>
      </div>
      <div className="terminal-body">
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
          {output.split('\n').map((line, idx) => (
            <div key={idx}>
              <span className="tk-kw">{line.split(' ')[0]}</span>{line.slice(line.indexOf(' '))}
            </div>
          ))}
          {!done && <span style={{ opacity: 0.6 }}>▍</span>}
        </pre>
        {done && (
          <div className="result-table">
            <div className="result-row">
              <div className="k">name</div>
              <div className="v">Cinthia Ochoa Torre</div>
            </div>
            <div className="result-row">
              <div className="k">role</div>
              <div className="v">Data Science student</div>
            </div>
            <div className="result-row">
              <div className="k">focus</div>
              <div className="v">SQL · Python · data quality & validation</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <p className="section-num">{num}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="nav-brand">cinthia<span>.</span>ochoa</div>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
          <a className="nav-cta" href={RESUME_PATH} download>
            Download resume
          </a>
        </div>
      </nav>

      <header className="hero wrap">
        <p className="eyebrow">data science student · atlanta, ga</p>
        <h1>Cinthia Ochoa Torre</h1>
        <p className="lede">
          Data science student focused on SQL, data validation, and data quality
          improvement — turning messy datasets into accurate, trustworthy results.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={RESUME_PATH} download>Download resume ↓</a>
          <a className="btn btn-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="btn btn-ghost" href="#projects">See projects</a>
        </div>
        <Terminal />
      </header>

      <main>
        <section id="about" className="wrap about">
          <SectionHead num="01 / about" title="Profile" />
          <p>
            Data science student with experience in SQL, data validation, and data
            quality improvement. Skilled in analyzing datasets, implementing validation
            checks, and ensuring data accuracy, integrity, and consistency. Experience
            supporting testing workflows, troubleshooting systems, and collaborating
            with cross-functional teams to deliver reliable, data-driven solutions.
          </p>
          <hr className="divider" style={{ marginTop: 40 }} />
        </section>

        <section id="education" className="wrap">
          <SectionHead num="02 / education" title="Education" />
          <div className="ed-grid">
            <div className="card">
              <h3>Georgia State University</h3>
              <p className="meta">B.S. Data Science · College of Arts and Sciences · Fall 2026</p>
              <span className="gpa">GPA 3.7 / 4.0</span>
            </div>
            <div className="card">
              <h3>Edmonds College</h3>
              <p className="meta">Associate Degree, Computer Science · Spring 2024</p>
              <span className="gpa">GPA 3.7 / 4.0</span>
            </div>
          </div>
          <hr className="divider" style={{ marginTop: 40 }} />
        </section>

        <section id="skills" className="wrap">
          <SectionHead num="03 / skills" title="Skills & tools" />
          <div className="skill-grid">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-block" key={group.title}>
                <h4>{group.title}</h4>
                <div className="tag-row">
                  {group.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="divider" style={{ marginTop: 40 }} />
        </section>

        <section id="projects" className="wrap">
          <SectionHead num="04 / projects" title="Academic projects" />
          <div className="proj-list">
            {PROJECTS.map((p) => (
              <article className="proj" key={p.title}>
                <div className="proj-top">
                  <h3>{p.title}</h3>
                  <span className="date">{p.date}</span>
                </div>
                <ul>
                  {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <hr className="divider" style={{ marginTop: 40 }} />
        </section>

        <section id="experience" className="wrap">
          <SectionHead num="05 / experience" title="Work experience" />
          <div className="timeline">
            {EXPERIENCE.map((job) => (
              <div className="tl-item" key={job.role}>
                <span className="tl-dot" />
                <h3>{job.role}</h3>
                <p className="tl-org">{job.org}</p>
                <ul>
                  {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <hr className="divider" style={{ marginTop: 40 }} />
        </section>

        <section id="leadership" className="wrap">
          <SectionHead num="06 / leadership" title="Leadership & involvement" />
          <div className="lead-grid">
            {LEADERSHIP.map((item) => (
              <div className="card" key={item.role}>
                <h3>{item.role}</h3>
                <p className="meta">{item.org}</p>
                <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7 }}>
                  {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="wrap footer-inner">
          <div>
            <p className="section-num">07 / contact</p>
            <h2 className="footer-title">Let's work together.</h2>
            <div className="footer-links">
              <a className="btn btn-primary" href={RESUME_PATH} download>Download resume ↓</a>
              <a className="btn btn-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text-dim)' }}>
            {PHONE}
          </div>
        </div>
        <div className="wrap footer-copy">© {new Date().getFullYear()} Cinthia Ochoa Torre. Built with React.</div>
      </footer>
    </>
  )
}
