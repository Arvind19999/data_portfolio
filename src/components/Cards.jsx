import { Link } from 'react-router-dom';
import { ArrowRight, DoubleChevron, Quote, ServiceIcon, Star } from './Icons';
import ProjectViz from './ProjectViz';

/* -- service ------------------------------------------------------------- */

export function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="svc">
      <div className="svc__icon">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="svc__title">{service.title}</h3>
      <p className="svc__text">{service.excerpt}</p>
      <ul className="svc__points">
        {service.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </Link>
  );
}

/* -- project ------------------------------------------------------------- */

export function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="proj">
      <div className="proj__media">
        <div className="proj__viz">
          {/* a real screenshot when the project has one, generated artwork otherwise */}
          {project.media?.thumb ? (
            <img
              className="proj__img"
              src={project.media.thumb.src}
              alt=""
              width={project.media.thumb.width}
              height={project.media.thumb.height}
              loading="lazy"
            />
          ) : (
            <ProjectViz seed={project.slug} accent={project.accent} />
          )}
        </div>
        <div className="proj__overlay">
          <span className="proj__cta">
            <ArrowRight />
          </span>
        </div>
      </div>
      <div className="proj__body">
        <h3 className="proj__title">{project.title}</h3>
        <span className="proj__cat">{project.category}</span>
      </div>
    </Link>
  );
}

/* -- testimonial --------------------------------------------------------- */

export function QuoteCard({ item }) {
  return (
    <figure className="quote">
      <Quote className="quote__mark" />
      <blockquote className="quote__text">{item.quote}</blockquote>
      <figcaption className="quote__foot">
        <div>
          <div className="quote__name">{item.name}</div>
          <div className="quote__role">{item.role}</div>
        </div>
        <div className="stars" aria-label={`${item.rating} out of 5`}>
          {Array.from({ length: item.rating }, (_, i) => (
            <Star key={i} />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

/* -- pricing ------------------------------------------------------------- */

export function PriceCard({ plan }) {
  return (
    <div className={`price ${plan.featured ? 'price--featured' : ''}`}>
      {plan.featured && <span className="price__tag">Most Popular</span>}
      <h3 className="price__name">{plan.name}</h3>
      <p className="price__desc">{plan.description}</p>
      <div className="price__amount">
        {plan.price}
        <span className="price__unit">{plan.unit}</span>
      </div>

      <ul className="price__features">
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <Link to="/contact" className={`btn btn--block ${plan.featured ? 'btn--solid' : ''}`}>
        <span>Get Started</span>
      </Link>
    </div>
  );
}

/* -- blog post ----------------------------------------------------------- */

export function PostCard({ post }) {
  return (
    <article className="post">
      <Link to={`/blog/${post.slug}`} className="post__thumb" aria-label={post.title}>
        <ProjectViz seed={post.slug} accent={post.accent} variant="bars" />
      </Link>

      <div>
        <div className="post__meta">
          <span>{post.category}</span>
          <span>—</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="post__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="post__excerpt">{post.excerpt}</p>
      </div>

      <div className="post__action">
        <Link to={`/blog/${post.slug}`} className="btn btn--sm">
          <span>Read More</span>
          <DoubleChevron className="btn__icon" />
        </Link>
      </div>
    </article>
  );
}
