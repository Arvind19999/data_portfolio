import { Link, Navigate, useParams } from 'react-router-dom';

import Banner from '../components/Banner';
import { ChevronRight, Download, DoubleChevron, ServiceIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { profile, services } from '../data/site';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  usePageMeta(service?.title ?? 'Service', service?.excerpt);

  if (!service) return <Navigate to="/404" replace />;

  return (
    <>
      <Banner
        title={service.title}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      <section className="section">
        <div className="arcs" />
        <div className="container">
          <div className="pd-grid">
            <div>
              <Reveal>
                <div style={{ color: '#fff', marginBottom: 28, opacity: 0.9 }}>
                  <ServiceIcon name={service.icon} />
                </div>

                <h2 style={{ marginBottom: 24 }}>{service.excerpt}</h2>
                <p style={{ fontSize: '1.02rem', lineHeight: 1.95 }}>{service.description}</p>
              </Reveal>

              <Reveal delay={100} style={{ marginTop: 50 }}>
                <h3 style={{ marginBottom: 26 }}>What You Get</h3>
                <ul className="tl__points">
                  {service.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={140} style={{ marginTop: 50 }}>
                <h3 style={{ marginBottom: 26 }}>How I Work</h3>
                <div className="steps">
                  {[
                    {
                      t: 'Understand the data',
                      d: 'Before writing anything I map the sources, the volumes, the update cadence and where the current pain actually is.',
                    },
                    {
                      t: 'Design for failure',
                      d: 'Schema drift, partial runs and duplicate records are assumed, not hoped against. The design accounts for them from the start.',
                    },
                    {
                      t: 'Build and validate',
                      d: 'Implementation ships alongside row-count reconciliation and automated checks, so correctness is provable rather than assumed.',
                    },
                    {
                      t: 'Hand over properly',
                      d: 'Documentation, runbooks and a walkthrough — you own the system afterwards, not a black box.',
                    },
                  ].map((step, i) => (
                    <div className="step" key={step.t}>
                      <span className="step__num">0{i + 1}</span>
                      <div>
                        <h4 className="step__title">{step.t}</h4>
                        <p>{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar --------------------------------------------------- */}
            <aside>
              <div className="info-card">
                <h4 style={{ marginBottom: 22, fontSize: '1.1rem' }}>All Services</h4>

                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      padding: '13px 0',
                      borderBottom: '1px solid var(--line-soft)',
                      fontSize: '0.92rem',
                      color: s.slug === service.slug ? '#fff' : 'var(--muted)',
                    }}
                  >
                    {s.title}
                    <ChevronRight />
                  </Link>
                ))}

                <div style={{ marginTop: 30, display: 'grid', gap: 12 }}>
                  <a className="btn btn--sm btn--block" href={profile.resume} download>
                    <span>Get Resume</span>
                    <Download className="btn__icon" size={15} />
                  </a>
                  <Link to="/contact" className="btn btn--sm btn--block btn--solid">
                    <span>Start A Project</span>
                    <DoubleChevron className="btn__icon" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
