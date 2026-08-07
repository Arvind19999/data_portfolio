import { Link } from 'react-router-dom';

import { DoubleChevron } from '../components/Icons';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page Not Found');

  return (
    <section className="notfound">
      <div className="arcs" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div className="notfound__code">404</div>
          <h2 style={{ marginBottom: 20 }}>This Pipeline Has No Sink.</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 38px' }}>
            The page you asked for does not exist — a broken link, a typo, or something that
            moved. Let&rsquo;s route you back to a valid destination.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--solid">
              <span>Back To Home</span>
              <DoubleChevron className="btn__icon" />
            </Link>
            <Link to="/contact" className="btn">
              <span>Report It</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
