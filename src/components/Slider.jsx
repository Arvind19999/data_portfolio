import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';

/**
 * Lightweight carousel — responsive slides-per-view, arrow + dot navigation,
 * keyboard arrows and touch swipe. No dependency.
 */
export default function Slider({
  items,
  renderItem,
  perView = { base: 1, md: 2, lg: 3 },
  showArrows = true,
  showDots = true,
  ariaLabel = 'Carousel',
}) {
  const [visible, setVisible] = useState(perView.base);
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1100) setVisible(perView.lg ?? perView.md ?? perView.base);
      else if (w >= 720) setVisible(perView.md ?? perView.base);
      else setVisible(perView.base);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [perView.base, perView.md, perView.lg]);

  const maxIndex = Math.max(0, items.length - visible);

  // Clamp when the viewport (and therefore slides-per-view) changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const pages = useMemo(
    () => Array.from({ length: maxIndex + 1 }, (_, i) => i),
    [maxIndex]
  );

  const go = (next) => setIndex(Math.min(Math.max(next, 0), maxIndex));

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(index - 1);
        if (e.key === 'ArrowRight') go(index + 1);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) go(dx < 0 ? index + 1 : index - 1);
        touchX.current = null;
      }}
    >
      <div className="slider__viewport">
        <div
          className="slider__track"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {items.map((item, i) => (
            <div
              className="slider__slide"
              key={item.slug || item.name || i}
              style={{ flexBasis: `${100 / visible}%` }}
              aria-hidden={i < index || i >= index + visible}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {showArrows && maxIndex > 0 && (
        <div className="slider__nav">
          <button
            type="button"
            className="slider__btn"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="slider__btn"
            onClick={() => go(index + 1)}
            disabled={index === maxIndex}
            aria-label="Next slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {showDots && maxIndex > 0 && (
        <div className="slider__dots">
          {pages.map((p) => (
            <button
              key={p}
              type="button"
              className={`slider__dot ${p === index ? 'is-active' : ''}`}
              onClick={() => go(p)}
              aria-label={`Go to slide ${p + 1}`}
              aria-current={p === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
