import { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import Reveal from './Reveal';
import { Expand } from './Icons';

/**
 * Screenshot grid. A shot with `span: 'full'` takes the whole row; the rest
 * pair up two across. Clicking any of them opens the lightbox at that index.
 */
export default function ProjectGallery({ shots }) {
  const [open, setOpen] = useState(-1);

  return (
    <>
      <div className="pg">
        {shots.map((shot, i) => (
          <Reveal
            key={shot.src}
            delay={(i % 2) * 80}
            className={`pg__item ${shot.span === 'full' ? 'pg__item--full' : ''}`.trim()}
          >
            <figure>
              <button
                type="button"
                className="pg__shot"
                onClick={() => setOpen(i)}
                aria-label={`View full size — ${shot.title}`}
              >
                <img
                  src={shot.src}
                  alt={shot.title}
                  width={shot.width}
                  height={shot.height}
                  loading="lazy"
                />
                <span className="pg__zoom">
                  <Expand />
                </span>
              </button>

              <figcaption className="pg__caption">
                <strong>{shot.title}</strong>
                {shot.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {open > -1 && (
        <ImageLightbox
          shots={shots}
          index={open}
          onIndex={setOpen}
          onClose={() => setOpen(-1)}
        />
      )}
    </>
  );
}
