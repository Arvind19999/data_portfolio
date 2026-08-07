import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation, profile, socials } from '../data/site';
import { ChevronDown, Close, DoubleChevron, LogoMark } from './Icons';
import { socialIcon } from './socialIcon';

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setDrawer(false);
    setOpenSub(null);
  }, [location.pathname]);

  // Lock body scroll while the drawer is open, and allow Escape to close it.
  useEffect(() => {
    document.body.classList.toggle('no-scroll', drawer);
    const onKey = (e) => e.key === 'Escape' && setDrawer(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [drawer]);

  const logo = (
    <Link to="/" className="logo" aria-label={`${profile.name} — home`}>
      <LogoMark className="logo__mark" />
      <span>{profile.firstName}</span>
    </Link>
  );

  return (
    <>
      <header className={`header ${stuck ? 'header--stuck' : ''}`}>
        <div className="container header__inner">
          {logo}

          <nav className="nav" aria-label="Primary">
            {navigation.map((item) => (
              <div className="nav__item" key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="nav__caret" />}
                </NavLink>

                {item.children && (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        className={({ isActive }) => (isActive ? 'is-active' : '')}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link to="/contact" className="btn btn--sm header__cta">
            <span>Hire Me</span>
            <DoubleChevron className="btn__icon" />
          </Link>

          <button
            type="button"
            className={`burger ${drawer ? 'is-open' : ''}`}
            aria-label="Open menu"
            aria-expanded={drawer}
            onClick={() => setDrawer(true)}
          >
            <span />
          </button>
        </div>
      </header>

      {/* Mobile off-canvas ------------------------------------------------ */}
      <div
        className={`drawer__overlay ${drawer ? 'is-open' : ''}`}
        onClick={() => setDrawer(false)}
        aria-hidden="true"
      />

      <aside className={`drawer ${drawer ? 'is-open' : ''}`} aria-hidden={!drawer}>
        <div className="drawer__head">
          {logo}
          <button
            type="button"
            className="drawer__close"
            onClick={() => setDrawer(false)}
            aria-label="Close menu"
          >
            <Close />
          </button>
        </div>

        <ul className="drawer__nav">
          {navigation.map((item) => (
            <li key={item.label}>
              <div className="drawer__row">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  tabIndex={drawer ? 0 : -1}
                >
                  {item.label}
                </NavLink>

                {item.children && (
                  <button
                    type="button"
                    className={`drawer__toggle ${openSub === item.label ? 'is-open' : ''}`}
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={openSub === item.label}
                    tabIndex={drawer ? 0 : -1}
                    onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                  >
                    <ChevronDown />
                  </button>
                )}
              </div>

              {item.children && (
                <div className={`drawer__sub ${openSub === item.label ? 'is-open' : ''}`}>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.to}
                      tabIndex={drawer && openSub === item.label ? 0 : -1}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="drawer__foot">
          <Link to="/contact" className="btn btn--sm" tabIndex={drawer ? 0 : -1}>
            <span>Hire Me</span>
            <DoubleChevron className="btn__icon" />
          </Link>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <div className="f-socials" style={{ marginTop: 6 }}>
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
                  tabIndex={drawer ? 0 : -1}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
