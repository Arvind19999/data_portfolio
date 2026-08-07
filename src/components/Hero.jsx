import { useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, socials } from '../data/site';
import { Download, Play } from './Icons';
import { socialIcon } from './socialIcon';
import VideoModal from './VideoModal';

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
            <div className="hero__orbit" aria-hidden="true" />

            <div className="hero__portrait-frame">
              <img
                className="hero__portrait"
                src="/images/portrait.png"
                alt={`${profile.name}, ${profile.role}`}
                width="1024"
                height="1536"
                fetchPriority="high"
              />
            </div>

            <div className="hero__socials">
              {socials.map((s) => {
                const Icon = socialIcon(s.icon);
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    className="orbit-link"
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
