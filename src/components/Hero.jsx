import { useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, socials } from '../data/site';
import { Download, Play } from './Icons';
import { socialIcon } from './socialIcon';
import VideoModal from './VideoModal';

/**
 * Where each social link sits on the arc, in degrees (0° = due right, up = -).
 * Kept inside the drawn segment (±52°) so every icon lands on the visible line.
 */
const ORBIT_ANGLES = [-34, -17, 0, 17, 34];

export default function Hero() {
  const [video, setVideo] = useState(false);

  return (
    <section className="hero">
      <div className="arcs" />

      <div className="container">
        <div className="hero__grid">
          <div>
            <p className="hero__eyebrow">Hello! I&rsquo;m</p>

            <h1 className="hero__name">{profile.name}</h1>

            {/* hand-drawn stroke under the name, as in the reference design */}
            <svg
              className="hero__squiggle"
              viewBox="0 0 300 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 11c22-7 44 4 66-1s44-9 66-4 44 10 66 5 44-8 98-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <p className="hero__role">{profile.tagline}</p>

            <div className="hero__actions">
              <a className="btn" href={profile.resume} download>
                <span>Get Resume</span>
                <Download className="btn__icon" />
              </a>

              <button type="button" className="play" onClick={() => setVideo(true)}>
                <span className="play__ring">
                  <Play />
                </span>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          <div className="hero__figure">
            {/* The ring and the social links share one circle: each link is
                placed at `angle` degrees on it, so the drawn line passes
                exactly through every icon. 0° is due right, negative is up. */}
            <div className="hero__orbit">
              <svg className="hero__orbit-line" viewBox="0 0 100 100" aria-hidden="true">
                {/* Only the right-hand segment of the circle is drawn, so the
                    curve stays beside the portrait instead of sweeping back
                    across the headline. Endpoints sit just past the outermost
                    links (±42° here, links at ±34°). */}
                <path d="M87.16 16.54 A50 50 0 0 1 87.16 83.46" />
                <path className="orbit-inner" d="M77.43 19.53 A41 41 0 0 1 77.43 80.47" />
              </svg>
            </div>

            <img
              className="hero__portrait"
              src="/images/portrait.png"
              alt={`${profile.name}, ${profile.role}`}
              width="1100"
              height="1657"
              fetchPriority="high"
            />

            <div className="hero__socials">
              {socials.map((s, i) => {
                const Icon = socialIcon(s.icon);
                const rad = ((ORBIT_ANGLES[i] ?? 0) * Math.PI) / 180;

                return (
                  <a
                    key={s.name}
                    href={s.url}
                    className="orbit-link"
                    style={{
                      left: `${50 + 50 * Math.cos(rad)}%`,
                      top: `${50 + 50 * Math.sin(rad)}%`,
                    }}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={s.name}
                    title={s.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Link to="/about" className="hero__scroll">
        Scroll
      </Link>

      {video && <VideoModal url={profile.videoUrl} onClose={() => setVideo(false)} />}
    </section>
  );
}
