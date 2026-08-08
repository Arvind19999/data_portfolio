import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Counters from '../components/Counters';
import { Download, DoubleChevron } from '../components/Icons';
import Resume from '../components/Resume';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import SkillBars from '../components/SkillBars';
import Slider from '../components/Slider';
import { QuoteCard } from '../components/Cards';
import { usePageMeta } from '../hooks/usePageMeta';
import { profile, techStack, testimonials } from '../data/site';

export default function About() {
  usePageMeta('About', profile.intro);

  return (
    <>
      <Banner title="About Me" crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]} />

      {/* Intro ---------------------------------------------------------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <div className="about-intro">
            {/* A cut-out with a real alpha channel, so it sits straight on the
                page background with no card around it — see `.about-intro`. */}
            <Reveal className="about-intro__media">
              <img
                src="/images/about.webp"
                alt={`${profile.name} at work`}
                width="1100"
                height="1164"
                loading="lazy"
              />
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

      {/* Resume — experience and education behind one pair of tabs ------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <SectionHead label="Resume" title="Where I Have Worked And Studied." />

          <Reveal>
            <Resume />
          </Reveal>
        </div>
      </section>

      {/* Skills + stack ------------------------------------------------- */}
      <section className="section section--alt">
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
      <section className="section">
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
