import Reveal from './Reveal';

export default function SectionHead({ label, title, text, center = false, className = '' }) {
  return (
    <Reveal className={`sec-head ${center ? 'sec-head--center' : ''} ${className}`.trim()}>
      {label && <span className="sec-label">{label}</span>}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </Reveal>
  );
}
