import { useMemo, useState } from 'react';

import Banner from '../components/Banner';
import { ProjectCard } from '../components/Cards';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { usePageMeta } from '../hooks/usePageMeta';
import { projects } from '../data/site';

export default function ProjectsPage() {
  usePageMeta('Projects', 'Data platforms, pipelines and migrations built in production.');

  const filters = useMemo(() => {
    const set = new Set(projects.flatMap((p) => p.tags));
    return ['All', ...Array.from(set)];
  }, []);

  const [active, setActive] = useState('All');

  const shown =
    active === 'All' ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <Banner title="Projects" crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]} />

      <section className="section">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            center
            label="Portfolio"
            title="Things I Have Built."
            text="Each project below is real production work — the summary states the constraint that shaped it."
          />

          <Reveal
            className="chips"
            style={{ justifyContent: 'center', marginBottom: 56 }}
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className="chip"
                onClick={() => setActive(f)}
                style={
                  active === f
                    ? {
                        background: '#fff',
                        color: 'var(--bg)',
                        borderColor: '#fff',
                        cursor: 'pointer',
                      }
                    : { cursor: 'pointer' }
                }
                aria-pressed={active === f}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="proj-grid">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          {shown.length === 0 && (
            <p className="text-center" style={{ marginTop: 40 }}>
              No projects match that filter.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
