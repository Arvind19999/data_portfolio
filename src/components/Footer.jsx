import { Link } from 'react-router-dom';
import { profile, socials } from '../data/site';
import { LogoMark, Mail, Phone } from './Icons';
import { socialIcon } from './socialIcon';
import Newsletter from './Newsletter';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Newsletter />

      <div className="container">
        <div className="footer__contact">
          <a className="f-item" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <span className="f-item__ring">
              <Phone />
            </span>
            {profile.phone}
          </a>

          <a className="f-item" href={`mailto:${profile.email}`}>
            <span className="f-item__ring">
              <Mail />
            </span>
            {profile.email}
          </a>

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
        </div>
      </div>

      <div className="container">
        <div className="footer__bar">
          <p className="footer__copy">
            © {year} <strong>{profile.name}</strong> — Data Engineer, built with React.
          </p>
          <Link to="/" className="logo" style={{ fontSize: '1.35rem' }}>
            <LogoMark className="logo__mark" style={{ width: 30, height: 30 }} />
            <span>{profile.firstName}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
