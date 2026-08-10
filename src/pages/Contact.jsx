import { useState } from 'react';

import Banner from '../components/Banner';
import { DoubleChevron } from '../components/Icons';
import { socialIcon } from '../components/socialIcon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { usePageMeta } from '../hooks/usePageMeta';
import { contactFormKey, profile, socials } from '../data/site';

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };
const ENDPOINT = 'https://api.web3forms.com/submit';

export default function Contact() {
  usePageMeta('Contact', `Get in touch with ${profile.name} about data engineering work.`);

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  // idle | sending | ok | error | mail  — `mail` is the no-key fallback below.
  const [status, setStatus] = useState('idle');
  // Hidden from real visitors, but bots fill in every input they find. Web3Forms
  // drops the submission when this comes back with anything in it.
  const [botcheck, setBotcheck] = useState('');

  const set = (key) => (e) => {
    setValues({ ...values, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
    // Editing after a verdict means they are having another go — clear it, so a
    // stale success or failure notice is not left sitting under a fresh message.
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please tell me your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'A valid email, please.';
    if (!values.subject.trim()) next.subject = 'What is this about?';
    if (values.message.trim().length < 10) next.message = 'A little more detail helps.';
    return next;
  };

  // The escape hatch: a mail client pre-filled with everything they typed. Used
  // when no key is configured, and offered as a link if the POST fails, so a
  // message someone took the trouble to write is never simply lost.
  const mailtoHref = () => {
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');

    return `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!contactFormKey) {
      window.location.href = mailtoHref();
      setStatus('mail');
      setValues(EMPTY);
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactFormKey,
          // `subject` titles the mail, `from_name` signs it and `email` becomes
          // the reply-to — so replying in the inbox reaches the sender directly.
          subject: values.subject,
          from_name: values.name,
          name: values.name,
          email: values.email,
          phone: values.phone || 'Not given',
          message: values.message,
          botcheck,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'The form service refused it.');
      setStatus('ok');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const details = [
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: profile.website, href: 'https://github.com/Arvind19999' },
    { label: 'Address', value: profile.address },
  ];

  return (
    <>
      <Banner title="Contact Me" crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      {/* Map ------------------------------------------------------------ */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="map">
            {/* Keyless embed — renders without WebGL or an API key. */}
            <iframe
              title={`Map of ${profile.location}`}
              src="https://maps.google.com/maps?q=Kathmandu%2C%20Nepal&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* Details + form ------------------------------------------------- */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="arcs" />
        <div className="container">
          <div className="contact-grid">
            <aside>
              <Reveal>
                {details.map((d) => (
                  <div className="contact-card" key={d.label}>
                    <div className="contact-card__label">{d.label}</div>
                    {d.href ? (
                      <a
                        className="contact-card__value"
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="contact-card__value">{d.value}</div>
                    )}
                  </div>
                ))}
              </Reveal>

              <Reveal delay={100} style={{ marginTop: 44 }}>
                <h3 style={{ marginBottom: 20 }}>Follow Me</h3>
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
            </aside>

            <div>
              <SectionHead
                label="Get In Touch"
                title="Have A Data Problem? Let's Talk."
                text="Describe your stack and what is currently painful. I will come back with an honest assessment of scope and approach before any commitment."
              />

              <Reveal>
                <form className="form" onSubmit={submit} noValidate>
                  <div className="field">
                    <input
                      className="input"
                      placeholder="Your Name *"
                      aria-label="Your name"
                      value={values.name}
                      onChange={set('name')}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <span className="field__error">{errors.name}</span>}
                  </div>

                  <div className="field">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email Address *"
                      aria-label="Email address"
                      value={values.email}
                      onChange={set('email')}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </div>

                  <div className="field">
                    <input
                      className="input"
                      placeholder="Phone (optional)"
                      aria-label="Phone number"
                      value={values.phone}
                      onChange={set('phone')}
                    />
                  </div>

                  <div className="field">
                    <input
                      className="input"
                      placeholder="Subject *"
                      aria-label="Subject"
                      value={values.subject}
                      onChange={set('subject')}
                      aria-invalid={Boolean(errors.subject)}
                    />
                    {errors.subject && <span className="field__error">{errors.subject}</span>}
                  </div>

                  <div className="field field--full">
                    <textarea
                      className="textarea"
                      placeholder="Tell me about your project *"
                      aria-label="Message"
                      value={values.message}
                      onChange={set('message')}
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && <span className="field__error">{errors.message}</span>}
                  </div>

                  {/* Off-screen rather than display:none — bots skip what is
                      plainly hidden, but happily fill a field they can "see". */}
                  <input
                    className="form__honey"
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={botcheck}
                    onChange={(e) => setBotcheck(e.target.value)}
                  />

                  {status === 'ok' && (
                    <div className="form__status form__status--ok" role="status">
                      Thank you — your message is on its way. I read everything myself and will
                      reply within a day or two.
                    </div>
                  )}

                  {status === 'mail' && (
                    <div className="form__status form__status--ok" role="status">
                      Your mail client should have opened with the message ready to send. If it
                      did not, email me directly at {profile.email}.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="form__status form__status--bad" role="alert">
                      That did not go through — the form service may be down, or something is
                      blocking the request.{' '}
                      <a href={mailtoHref()}>Send it as an email instead</a>, or write to{' '}
                      {profile.email}. Nothing you typed has been lost.
                    </div>
                  )}

                  <div className="field--full">
                    <button type="submit" className="btn" disabled={status === 'sending'}>
                      <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
                      <DoubleChevron className="btn__icon" />
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
