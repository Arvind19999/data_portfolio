import { useInView } from '../hooks/useInView';
import { skills } from '../data/site';

export default function SkillBars() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <div ref={ref}>
      {skills.map((skill, i) => (
        <div className="bar" key={skill.name}>
          <div className="bar__top">
            <span className="bar__name">{skill.name}</span>
            <span className="bar__value">{skill.level}%</span>
          </div>
          <div
            className="bar__track"
            role="progressbar"
            aria-label={skill.name}
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span
              className="bar__fill"
              style={{
                width: inView ? `${skill.level}%` : 0,
                transitionDelay: `${i * 110}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
