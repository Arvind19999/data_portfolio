import { useId, useState } from 'react';
import { ChevronDown } from './Icons';

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="acc__item" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`${uid}-panel-${i}`}
                id={`${uid}-btn-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="acc__sign">
                  <ChevronDown size={16} />
                </span>
              </button>
            </h3>

            <div
              className={`acc__panel ${isOpen ? 'is-open' : ''}`}
              id={`${uid}-panel-${i}`}
              role="region"
              aria-labelledby={`${uid}-btn-${i}`}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
