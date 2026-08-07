import { useEffect } from 'react';
import { Close } from './Icons';

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

  return (
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
    </div>
  );
}
