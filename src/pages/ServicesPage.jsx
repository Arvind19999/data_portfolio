import Accordion from '../components/Accordion';
import Banner from '../components/Banner';
import { PriceCard, ServiceCard } from '../components/Cards';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { usePageMeta } from '../hooks/usePageMeta';
import { faqs, pricing, services } from '../data/site';

export default function ServicesPage() {
  usePageMeta(
    'Services',
    'ETL pipelines, cloud data platforms, database migration, warehousing, workflow automation and search analytics.'
  );

  return (
    <>
      <Banner title="Services" crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      <section className="section">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            center
            label="What I Do"
            title="Data Engineering, End To End."
            text="Six areas I work in — pick one, or hand over the whole platform."
          />

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="arcs" />
        <div className="container">
          <SectionHead
            center
            label="Engagement Models"
            title="Simple, Honest Pricing."
            text="No lock-in and no surprise line items. Scope changes get discussed before they get billed."
          />

          <div className="price-grid">
            {pricing.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 90}>
                <PriceCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="arcs" />
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHead center label="FAQ" title="Questions, Answered." />
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
