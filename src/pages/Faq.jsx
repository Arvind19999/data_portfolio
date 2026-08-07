import { Link } from 'react-router-dom';

import Accordion from '../components/Accordion';
import Banner from '../components/Banner';
import { DoubleChevron } from '../components/Icons';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { usePageMeta } from '../hooks/usePageMeta';
import { faqs } from '../data/site';

export default function Faq() {
  usePageMeta('FAQ', 'Common questions about data engineering engagements, cloud platforms and migrations.');

  return (
    <>
      <Banner title="FAQ" crumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />

      <section className="section">
        <div className="arcs" />
        <div className="container" style={{ maxWidth: 940 }}>
          <SectionHead
            center
            label="Good To Know"
            title="Frequently Asked Questions."
            text="If your question is not here, ask it directly — I answer every message."
          />

          <Reveal>
            <Accordion items={faqs} />
          </Reveal>

          <Reveal className="text-center" delay={120} style={{ marginTop: 60 }}>
            <p>Still have something on your mind?</p>
            <Link to="/contact" className="btn">
              <span>Ask A Question</span>
              <DoubleChevron className="btn__icon" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
