import { useState } from 'react';
import SectionHead from './SectionHead';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  // No backend here — swap this for your provider's API call (Mailchimp,
  // Buttondown, a serverless function, …).
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSent(true);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="arcs" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          center
          label="Get Latest Updates"
          title="Subscribe For Newsletter"
          text="Occasional notes on data engineering — pipeline patterns, Spark tuning and the odd post-mortem. No noise."
        />

        <form className="newsletter__form" onSubmit={submit}>
          <input
            type="email"
            className="newsletter__input"
            placeholder="you@example.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            <span>{sent ? 'Subscribed' : 'Subscribe Now'}</span>
          </button>
        </form>

        {sent && (
          <p className="newsletter__note" role="status">
            Thanks — you are on the list.
          </p>
        )}
      </div>
    </section>
  );
}
