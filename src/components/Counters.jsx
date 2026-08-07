import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { stats } from '../data/site';

function Counter({ value, suffix, label }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    const duration = 1400;
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      setN(Math.round(value * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div className="counter" ref={ref}>
      <div className="counter__value">
        {n}
        {suffix}
      </div>
      <div className="counter__label">{label}</div>
    </div>
  );
}

export default function Counters() {
  return (
    <div className="counters">
      {stats.map((s) => (
        <Counter key={s.label} {...s} />
      ))}
    </div>
  );
}
