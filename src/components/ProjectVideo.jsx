import { useState } from 'react';
import { Play } from './Icons';

/**
 * Poster-first video player.
 *
 * The <video> element is not mounted until the poster is clicked, so the file
 * itself costs nothing on page load — only the poster image is fetched.
 */
export default function ProjectVideo({ video, className = '' }) {
  const [playing, setPlaying] = useState(false);

  // A stacked or portrait recording at full container width would be over a
  // thousand pixels tall and swallow the page, so those get held narrower.
  const tall = video.height / video.width > 0.8;

  return (
    <figure className={`pv ${tall ? 'pv--tall' : ''} ${className}`.trim()}>
      <div className="pv__frame" style={{ aspectRatio: `${video.width} / ${video.height}` }}>
        {playing ? (
          <video
            className="pv__video"
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        ) : (
          <button
            type="button"
            className="pv__cover"
            onClick={() => setPlaying(true)}
            aria-label={`Play walkthrough — ${video.title}`}
          >
            <img
              src={video.poster}
              alt=""
              width={video.width}
              height={video.height}
              fetchPriority="high"
            />
            <span className="pv__scrim" />
            <span className="pv__play">
              <Play />
            </span>
            <span className="pv__tags">
              <span className="pv__badge">Walkthrough</span>
              {video.length && <span className="pv__len">{video.length}</span>}
            </span>
          </button>
        )}
      </div>

      {video.caption && (
        <figcaption className="pv__caption">
          <strong>{video.title}</strong>
          {video.caption}
        </figcaption>
      )}
    </figure>
  );
}
