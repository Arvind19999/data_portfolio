import Banner from '../components/Banner';
import { PostCard } from '../components/Cards';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { usePageMeta } from '../hooks/usePageMeta';
import { posts } from '../data/site';

export default function BlogList() {
  usePageMeta('Blog', 'Notes on data engineering — pipeline patterns, Spark tuning and post-mortems.');

  return (
    <>
      <Banner title="Blog" crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

      <section className="section">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            center
            label="Writing"
            title="Notes From The Pipeline."
            text="Things I learned the hard way, written down so the next person does not have to."
          />

          <div className="posts">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
