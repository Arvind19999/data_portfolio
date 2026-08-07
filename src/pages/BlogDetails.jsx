import { Link, Navigate, useParams } from 'react-router-dom';

import Banner from '../components/Banner';
import { ChevronLeft, ChevronRight } from '../components/Icons';
import ProjectViz from '../components/ProjectViz';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { posts, socials } from '../data/site';
import { socialIcon } from '../components/socialIcon';

export default function BlogDetails() {
  const { slug } = useParams();
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];

  usePageMeta(post?.title ?? 'Post', post?.excerpt);

  if (!post) return <Navigate to="/404" replace />;

  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <>
      <Banner
        title="Blog Details"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post.category },
        ]}
      />

      <section className="section">
        <div className="arcs" />
        <div className="container">
          <article className="article">
            <Reveal className="article__hero">
              <ProjectViz seed={post.slug} accent={post.accent} variant="bars" />
            </Reveal>

            <Reveal delay={80}>
              <div className="article__meta">
                <span>{post.category}</span>
                <span>{post.date}</span>
                <span>By {post.author}</span>
                <span>{post.readTime}</span>
              </div>

              <h2 style={{ marginBottom: 34 }}>{post.title}</h2>

              <div className="article__body">
                {post.body.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="article__share" delay={120}>
              <span style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
                Found this useful? Share it.
              </span>
              <div className="f-socials">
                {socials.map((s) => {
                  const Icon = socialIcon(s.icon);
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      className="f-social"
                      target={s.url.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      aria-label={s.name}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal
              delay={140}
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
                <Link to={`/blog/${prev.slug}`} className="link-more">
                  <ChevronLeft /> Previous
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/blog/${next.slug}`} className="link-more">
                  Next <ChevronRight />
                </Link>
              )}
            </Reveal>
          </article>
        </div>
      </section>
    </>
  );
}
