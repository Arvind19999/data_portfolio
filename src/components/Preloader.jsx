import { useEffect, useState } from 'react';
import { profile } from '../data/site';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1150);
    const t2 = setTimeout(() => setGone(true), 1850);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden="true">
      <div className="preloader__mark">
        {profile.name}
        <span className="preloader__bar" />
      </div>
    </div>
  );
}
