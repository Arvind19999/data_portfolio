import { Link } from 'react-router-dom';
import { profile } from '../data/site';
import { Download, DoubleChevron } from './Icons';
import SectionHead from './SectionHead';

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="arcs" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          center
          label="Let's Build Something Together"
          title="Ready to Scale Your Data Infrastructure?"
          text="Whether you need to design robust, self-healing ETL pipelines, run cross-database migrations, or stand up a modern cloud data platform on AWS & Snowflake — I'm ready to help."
        />

        <div className="newsletter__actions">
          <Link to="/contact" className="btn btn--solid">
            <span>Get In Touch</span>
            <DoubleChevron className="btn__icon" />
          </Link>
          <a className="btn" href={profile.resume} download>
            <span>Download CV</span>
            <Download className="btn__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
