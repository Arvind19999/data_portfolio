import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Close } from './Icons';

/**
 * Full-screen viewer for a list of screenshots. Arrow keys and the side
 * buttons step through them; Escape or a click on the backdrop closes.
 *
 * Rendered through a portal: `.section > .container` sets `z-index: 1`, which
 * makes a stacking context, and inside it no z-index can lift the overlay
 * above the fixed header.
 */
export default function ImageLightbox({ shots, index, onIndex, onClose }) {
  const shot = shots[index];

  const step = useCallback(
    (d) => onIndex((index + d + shots.length) % shots.length),
    [index, shots.length, onIndex]
  );

  useEffect(() => {
    document.body.classList.add('no-scroll');

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [step, onClose]);

  return createPortal(
    <div
      className="lightbox lightbox--img"
      role="dialog"
      aria-modal="true"
      aria-label={shot.title}
      onClick={onClose}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
        <Close />
      </button>

      {shots.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.title} width={shot.width} height={shot.height} />
        <figcaption>
          <span className="lightbox__count">
            {index + 1} / {shots.length}
          </span>
          <strong>{shot.title}</strong>
          {shot.caption}
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
