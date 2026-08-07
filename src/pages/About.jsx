import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Counters from '../components/Counters';
import { Download, DoubleChevron } from '../components/Icons';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import SkillBars from '../components/SkillBars';
import Slider from '../components/Slider';
import { QuoteCard } from '../components/Cards';
import { usePageMeta } from '../hooks/usePageMeta';
import { education, experience, profile, techStack, testimonials } from '../data/site';

export default function About() {
  usePageMeta('About', profile.intro);

  return (
    <>
      <Banner title="About Me" crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]} />

      {/* Intro ---------------------------------------------------------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <div className="skills__grid">
            <Reveal>
              <div
                style={{
                  borderRadius: 'var(--r-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--line)',
                }}
              >
                <img
                  src="/images/about.png"
                  alt={`${profile.name} at work`}
                  width="1120"
                  height="1456"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="sec-label">About Me</span>
              <h2>Turning Raw Data Into Systems You Can Trust.</h2>

              {profile.about.map((para) => (
                <p key={para.slice(0, 40)} style={{ marginTop: 20 }}>
                  {para}
                </p>
              ))}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: 24,
                  margin: '34px 0',
                  paddingTop: 26,
                  borderTop: '1px solid var(--line-soft)',
                }}
              >
                {[
                  ['Experience', `${profile.experienceYears} Years`],
                  ['Location', profile.location],
                  ['Availability', profile.availability],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="info-card__label">{label}</div>
                    <div className="info-card__value">{value}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a className="btn" href={profile.resume} download>
                  <span>Download CV</span>
                  <Download className="btn__icon" />
                </a>
                <Link to="/contact" className="btn">
                  <span>Hire Me</span>
                  <DoubleChevron className="btn__icon" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Counters ------------------------------------------------------- */}
      <section className="section section--tight section--alt">
        <div className="container">
          <Reveal>
            <Counters />
          </Reveal>
        </div>
      </section>

      {/* Experience ----------------------------------------------------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <SectionHead label="Career" title="Experience" />

          <div className="tl">
            {experience.map((item, i) => (
              <Reveal className="tl__item" key={item.org} delay={i * 90}>
                <div className="tl__period">{item.period}</div>
                <div>
                  <h3 className="tl__title">{item.title}</h3>
                  <div className="tl__org">
                    {item.org} — {item.location}
                  </div>
                  <ul className="tl__points">
                    {item.points.map((p) => (
                      <li key={p.slice(0, 40)}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education ------------------------------------------------------ */}
      <section className="section section--alt">
        <div className="arcs" />
        <div className="container">
          <SectionHead label="Academics" title="Education" />

          <div className="tl">
            {education.map((item, i) => (
              <Reveal className="tl__item" key={item.title} delay={i * 80}>
                <div className="tl__period">{item.period}</div>
                <div>
                  <h3 className="tl__title">{item.title}</h3>
                  <div className="tl__org">{item.org}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + stack ------------------------------------------------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <div className="skills__grid">
            <Reveal>
              <span className="sec-label">Special Skills</span>
              <h2>My Special Skill Field.</h2>
              <p style={{ marginTop: 20 }}>
                Depth where it matters — distributed processing, SQL at scale, and the cloud
                infrastructure that carries both.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <SkillBars />
            </Reveal>
          </div>

          <Reveal delay={80} style={{ marginTop: 90 }}>
            <span className="sec-label">Toolbox</span>
            <h2 style={{ marginBottom: 44 }}>Technologies I Work With.</h2>

            {techStack.map((group) => (
              <div className="stack-group" key={group.group}>
                <h3 className="stack-group__title">{group.group}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Testimonials --------------------------------------------------- */}
      <section className="section section--alt">
        <div className="arcs" />
        <div className="container">
          <SectionHead center label="Testimonials" title="What People Say." />
          <Reveal>
            <Slider
              items={testimonials}
              ariaLabel="Testimonials"
              perView={{ base: 1, md: 2, lg: 2 }}
              showDots={false}
              renderItem={(item) => <QuoteCard item={item} />}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
