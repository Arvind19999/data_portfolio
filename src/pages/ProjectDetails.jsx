import { Link, Navigate, useParams } from 'react-router-dom';

import Banner from '../components/Banner';
import { ChevronLeft, ChevronRight, DoubleChevron } from '../components/Icons';
import ProjectViz from '../components/ProjectViz';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { projects } from '../data/site';

export default function ProjectDetails() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  usePageMeta(project?.title ?? 'Project', project?.summary);

  if (!project) return <Navigate to="/404" replace />;

  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      <Banner
        title="Project Details"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: project.title },
        ]}
      />

      <section className="section">
        <div className="arcs" />
        <div className="container">
          <Reveal className="pd__hero">
            <ProjectViz seed={project.slug} accent={project.accent} />
          </Reveal>

          <div className="pd-grid">
            <div>
              <Reveal>
                <span className="sec-label">{project.category}</span>
                <h2 style={{ marginBottom: 26 }}>{project.summary}</h2>
                {project.overview.map((para) => (
                  <p key={para.slice(0, 40)} style={{ fontSize: '1.02rem', lineHeight: 1.95 }}>
                    {para}
                  </p>
                ))}
              </Reveal>

              <Reveal delay={90} style={{ marginTop: 46 }}>
                <h3 style={{ marginBottom: 18 }}>The Challenge</h3>
                <p style={{ fontSize: '1.02rem', lineHeight: 1.95 }}>{project.challenge}</p>
              </Reveal>

              <Reveal delay={120} style={{ marginTop: 46 }}>
                <h3 style={{ marginBottom: 8 }}>How It Was Built</h3>
                <div className="steps">
                  {project.approach.map((step, i) => (
                    <div className="step" key={step.title}>
                      <span className="step__num">0{i + 1}</span>
                      <div>
                        <h4 className="step__title">{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="results">
                  {project.results.map((r) => (
                    <div className="result" key={r.label}>
                      <div className="result__value">{r.value}</div>
                      <div className="result__label">{r.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Prev / next ------------------------------------------- */}
              <Reveal
                delay={160}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 20,
                  flexWrap: 'wrap',
                  marginTop: 40,
                  paddingTop: 34,
                  borderTop: '1px solid var(--line)',
                }}
              >
                {prev ? (
                  <Link to={`/projects/${prev.slug}`} className="link-more">
                    <ChevronLeft /> {prev.title}
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link to={`/projects/${next.slug}`} className="link-more">
                    {next.title} <ChevronRight />
                  </Link>
                )}
              </Reveal>
            </div>

            {/* Sidebar --------------------------------------------------- */}
            <aside>
              <div className="info-card">
                <h4 style={{ marginBottom: 24, fontSize: '1.1rem' }}>Information</h4>

                {[
                  ['Project Name', project.title],
                  ['Client', project.client],
                  ['Duration', project.duration],
                  ['Date', project.date],
                  ['Year', project.year],
                ].map(([label, value]) => (
                  <div className="info-card__row" key={label}>
                    <div className="info-card__label">{label}</div>
                    <div className="info-card__value">{value}</div>
                  </div>
                ))}

                <div className="info-card__row">
                  <div className="info-card__label">Tech Stack</div>
                  <div className="chips" style={{ marginTop: 10 }}>
                    {project.stack.map((t) => (
                      <span className="chip" key={t} style={{ fontSize: '0.78rem', padding: '5px 14px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn btn--sm btn--block btn--solid"
                  style={{ marginTop: 28 }}
                >
                  <span>Discuss A Project</span>
                  <DoubleChevron className="btn__icon" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
