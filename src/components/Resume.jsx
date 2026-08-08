import { useRef, useState } from 'react';

import { education, experience } from '../data/site';

/**
 * Career and academics behind one pair of tabs, the way the reference template
 * does it: two oversized display buttons, then a list whose dates run down a
 * bordered left-hand column with a tick mark at each row.
 *
 * Experience leads — it is the stronger half of the story for this site.
 */
const TABS = [
  { id: 'experience', label: 'Experience', items: experience },
  { id: 'education', label: 'Education', items: education },
];

export default function Resume() {
  const [active, setActive] = useState('experience');
  const tabRefs = useRef({});

  // Arrow keys move between tabs, per the tablist pattern — otherwise a
  // keyboard user has to tab through them one at a time to read either half.
  const onKeyDown = (e) => {
    const order = TABS.map((t) => t.id);
    const at = order.indexOf(active);
    let next = null;

    if (e.key === 'ArrowRight') next = order[(at + 1) % order.length];
    else if (e.key === 'ArrowLeft') next = order[(at - 1 + order.length) % order.length];
    else if (e.key === 'Home') next = order[0];
    else if (e.key === 'End') next = order[order.length - 1];
    if (!next) return;

    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const tab = TABS.find((t) => t.id === active);

  return (
    <div className="resume">
      <div className="resume__tabs" role="tablist" aria-label="Resume">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`resume-tab-${t.id}`}
            aria-controls={`resume-panel-${t.id}`}
            aria-selected={active === t.id}
            tabIndex={active === t.id ? 0 : -1}
            ref={(el) => {
              tabRefs.current[t.id] = el;
            }}
            className={`resume__tab ${active === t.id ? 'is-active' : ''}`.trim()}
            onClick={() => setActive(t.id)}
            onKeyDown={onKeyDown}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Keyed on the tab so React remounts it and the fade replays on switch. */}
      <div
        key={active}
        className="resume__panel"
        role="tabpanel"
        id={`resume-panel-${active}`}
        aria-labelledby={`resume-tab-${active}`}
      >
        <ul className="resume__list">
          {tab.items.map((item) => (
            <li className="resume__item" key={`${item.title}-${item.period}`}>
              <div className="resume__year">
                <span>{item.period}</span>
              </div>

              <div className="resume__body">
                <h3 className="resume__title">{item.title}</h3>
                <div className="resume__org">
                  {item.org}
                  {item.location && ` — ${item.location}`}
                </div>

                {item.points ? (
                  <ul className="tl__points">
                    {item.points.map((p) => (
                      <li key={p.slice(0, 40)}>{p}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="resume__note">{item.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
