import { Link, Navigate, useParams } from 'react-router-dom';

import Banner from '../components/Banner';
import { ChevronLeft, ChevronRight, DoubleChevron } from '../components/Icons';
import ProjectDiagram from '../components/ProjectDiagram';
import ProjectGallery from '../components/ProjectGallery';
import ProjectVideo from '../components/ProjectVideo';
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
  const media = project.media;

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
          {/* Hero slot, best first: a recorded walkthrough, else a diagram drawn
              for the project, else the generated artwork as a fallback. */}
          {media?.video ? (
            <Reveal>
              <ProjectVideo video={media.video} className="pd__video" />
            </Reveal>
          ) : media?.diagram ? (
            <Reveal className="pd__diagram">
              <ProjectDiagram name={media.diagram} accent={project.accent} />
            </Reveal>
          ) : (
            <Reveal className="pd__hero">
              <ProjectViz seed={project.slug} accent={project.accent} />
            </Reveal>
          )}

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

          {/* Screenshots sit outside the grid so they get the full container
              width — these are dense UI captures and the sidebar column would
              squeeze them past the point of being readable. */}
          {media?.shots?.length > 0 && (
            <div className="pd-shots">
              <Reveal>
                <span className="sec-label">Inside The Build</span>
                <h3 style={{ marginBottom: 10 }}>Screens From The Platform</h3>
                <p className="pd-shots__lede">
                  Captured from the running application. Click any screen to open it full size.
                </p>
              </Reveal>

              <ProjectGallery shots={media.shots} />
            </div>
          )}

          {/* Prev / next ------------------------------------------------- */}
          <Reveal className="pd-nav">
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
      </section>
    </>
  );
}
