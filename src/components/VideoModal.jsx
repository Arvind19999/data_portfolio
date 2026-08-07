import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Close } from './Icons';

/**
 * Portalled to `body` for the same reason as ImageLightbox — `.hero > .container`
 * sets `z-index: 1`, so an overlay left inside it renders under the header.
 */
export default function VideoModal({ url, onClose }) {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Intro video"
      onClick={onClose}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close video">
        <Close />
      </button>

      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`${url}${url.includes('?') ? '&' : '?'}autoplay=1&rel=0`}
          title="Intro video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body
  );
}
