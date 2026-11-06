import {
  bio,
  education,
  experience,
  honors,
  interests,
  lastUpdated,
  links,
  news,
  profile,
  projects,
  publications,
  research,
} from '../content'
import CareerTimeline from './CareerTimeline'
import { A, Authors, Icon, Photo, Points } from './shared'
import './timeline.css'

const NAV = [
  ['news', 'News'],
  ['publications', 'Publications'],
  ['research', 'Research'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['honors', 'Honors'],
]

function Section({ id, track, title, children }) {
  return (
    <section id={id} className={`tl-section ${track ? `tl-c-${track}` : ''}`}>
      <h2 className="tl-h2">
        {track && <span className="tl-chip" aria-hidden="true" />}
        {title}
      </h2>
      {children}
    </section>
  )
}

function Entry({ id, title, href, date, subtitle, points }) {
  return (
    <article id={id} className="tl-entry">
      <div className="tl-entry-head">
        <h3>{href ? <A href={href}>{title}</A> : title}</h3>
        <span className="tl-date">{date}</span>
      </div>
      {subtitle && <p className="tl-subtitle">{subtitle}</p>}
      <Points items={points} />
    </article>
  )
}

export default function Timeline() {
  return (
    <div className="tl">
      <header className="tl-strip">
        <div className="tl-page tl-strip-inner">
          <a className="tl-strip-name" href="#top">
            {profile.name}
          </a>
          <nav aria-label="Sections">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
            <A href="/Xuyan_Huang_CV.pdf">CV</A>
          </nav>
        </div>
      </header>

      <div className="tl-page">
        <header id="top" className="tl-masthead">
          <div className="tl-intro">
            <h1>{profile.name}</h1>
            <p className="tl-role">
              {profile.role}, {profile.affiliation}
            </p>
            <div className="tl-bio">
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <p className="tl-interests">
              <strong>Research interests.</strong> {interests}.
            </p>
            <ul className="tl-links">
              {links.map((link) => (
                <li key={link.id}>
                  <A href={link.href}>
                    <Icon name={link.id} />
                    {link.id === 'email' ? profile.email : link.label}
                  </A>
                </li>
              ))}
            </ul>
          </div>
          <Photo
            src={profile.headshot}
            alt={`Portrait of ${profile.name}`}
            label="Headshot"
            hint="square photo"
            className="tl-portrait"
          />
        </header>
      </div>

      <div className="tl-band">
        <div className="tl-page">
          <CareerTimeline />
        </div>
      </div>

      <div className="tl-page">
        <main>
          <Section id="news" title="News">
            <ul className="tl-rows">
              {news.map((item) => (
                <li key={item.date}>
                  <span className="tl-date">{item.date}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="publications" track="research" title="Publications">
            {publications.map((paper) => (
              <article key={paper.id} id={paper.id} className="tl-pub">
                <figure className="tl-pub-figure">
                  <Photo
                    src={paper.figure}
                    alt={paper.figureAlt}
                    label="Paper figure"
                    hint="square image"
                  />
                  <figcaption>{paper.figureCaption}</figcaption>
                </figure>
                <div>
                  <span className="tl-badge">
                    {paper.venueShort} {paper.year}
                  </span>
                  <h3>
                    <A href={paper.href}>{paper.title}</A>
                  </h3>
                  <p className="tl-pub-authors">
                    <Authors names={paper.authors} />
                  </p>
                  <p className="tl-pub-summary">{paper.summary}</p>
                  <div className="tl-buttons">
                    {paper.links.map((link) => (
                      <A key={link.label} className="tl-button" href={link.href}>
                        {link.label}
                      </A>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </Section>

          <div className="tl-columns">
            <Section id="research" track="research" title="Research">
              {research.map((entry) => (
                <Entry key={entry.id} {...entry} />
              ))}
            </Section>

            <Section id="experience" track="experience" title="Experience">
              {experience.map((entry) => (
                <Entry key={entry.id} {...entry} />
              ))}
            </Section>
          </div>

          <Section id="projects" track="projects" title="Projects">
            <div className="tl-projects">
              {projects.map((project) => (
                <div key={project.id} className="tl-project">
                  {project.figure && (
                    <Photo src={project.figure} alt="" className="tl-project-figure" />
                  )}
                  <Entry {...project} />
                </div>
              ))}
            </div>
          </Section>

          <div className="tl-columns">
            <Section id="education" track="education" title="Education">
              {education.map((entry) => (
                <Entry
                  key={entry.id}
                  id={entry.id}
                  title={`${entry.school}, ${entry.place}`}
                  date={entry.date}
                  subtitle={entry.degree}
                  points={entry.notes}
                />
              ))}
            </Section>

            <Section id="honors" title="Honors">
              <ul className="tl-rows">
                {honors.map((honor) => (
                  <li key={honor.title}>
                    <span className="tl-date">{honor.date}</span>
                    <span>{honor.title}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </main>

        <footer className="tl-footer">
          © {new Date().getFullYear()} {profile.name}. Last updated {lastUpdated}.
        </footer>
      </div>
    </div>
  )
}
