import MigrationDiagram from './MigrationDiagram';

/**
 * Named, hand-drawn hero diagrams, keyed by `media.diagram` in `src/data/site.js`.
 *
 * Unlike everything else in a project's media block these are drawings, not
 * captures — worth keeping in one place so it stays obvious which projects
 * illustrate themselves rather than showing a screen.
 */
const DIAGRAMS = {
  'migration-flow': MigrationDiagram,
};

export default function ProjectDiagram({ name, accent }) {
  const Diagram = DIAGRAMS[name];
  return Diagram ? <Diagram accent={accent} /> : null;
}
