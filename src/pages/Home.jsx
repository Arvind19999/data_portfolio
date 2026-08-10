import { Link } from 'react-router-dom';

import { PostCard, PriceCard, ProjectCard, QuoteCard, ServiceCard } from '../components/Cards';
import Counters from '../components/Counters';
import Hero from '../components/Hero';
import { Download, DoubleChevron } from '../components/Icons';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import SkillBars from '../components/SkillBars';
import Slider from '../components/Slider';
import { usePageMeta } from '../hooks/usePageMeta';
import { faqs, posts, pricing, profile, projects, services, testimonials } from '../data/site';
import Accordion from '../components/Accordion';

export default function Home() {
  usePageMeta(
    null,
    `${profile.name} — ${profile.role} in ${profile.location}. ${profile.intro}`
  );

  return (
    <>
      <Hero />

      {/* Stats ---------------------------------------------------------- */}
      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <Counters />
          </Reveal>
        </div>
      </section>

      {/* Services ------------------------------------------------------- */}
      <section className="section section--alt">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            label="My Services"
            title="Data Solutions I Build For Clients."
            text="From raw source systems to a warehouse your analysts trust — the full path, engineered to stay reliable under production load."
          />

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills --------------------------------------------------------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <div className="skills__grid">
            <Reveal>
              <span className="sec-label">Special Skills</span>
              <h2>My Core Engineering Strengths.</h2>
              <p style={{ marginTop: 20, marginBottom: 34 }}>
                Three years of building data infrastructure that has to work at 3am without
                anyone watching it. These are the tools I reach for first.
              </p>
              <a className="btn" href={profile.resume} download>
                <span>Get Resume</span>
                <Download className="btn__icon" />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <SkillBars />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects ------------------------------------------------------- */}
      <section id="projects" className="section section--alt">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            label="Recent Work"
            title="Selected Data Engineering Projects."
            text="Platforms, pipelines and migrations built in production — each one with the constraints that shaped it."
          />

          <div className="proj-grid">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center" delay={140}>
            <Link to="/projects" className="btn" style={{ marginTop: 56 }}>
              <span>View All Projects</span>
              <DoubleChevron className="btn__icon" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials --------------------------------------------------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            center
            label="Testimonials"
            title="What People Say About My Work."
          />

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

      {/* Pricing -------------------------------------------------------- */}
      <section className="section section--alt">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            center
            label="Engagement Models"
            title="Ways We Can Work Together."
            text="Whether you need a specific pipeline built or someone to own the whole platform."
          />

          <div className="price-grid">
            {pricing.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 90}>
                <PriceCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog ----------------------------------------------------------- */}
      <section className="section">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            label="From The Blog"
            title="Notes On Building Data Systems."
          />

          <div className="posts">
            {posts.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center" delay={140}>
            <Link to="/blog" className="btn" style={{ marginTop: 48 }}>
              <span>Read All Posts</span>
              <DoubleChevron className="btn__icon" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ ------------------------------------------------------------ */}
      <section className="section section--alt">
        <div className="arcs" />
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHead center label="FAQ" title="Frequently Asked Questions." />
          <Reveal>
            <Accordion items={faqs.slice(0, 4)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
