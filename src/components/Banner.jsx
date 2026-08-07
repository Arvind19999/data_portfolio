import { Link } from 'react-router-dom';

/**
 * Inner-page hero: display title over a breadcrumb pill.
 * `crumbs` is [{ label, to? }] — the last entry renders as current.
 */
export default function Banner({ title, crumbs = [] }) {
  return (
    <section className="banner">
      <div className="arcs" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1>{title}</h1>

        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                {i > 0 && <span className="crumbs__sep">||</span>}
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
