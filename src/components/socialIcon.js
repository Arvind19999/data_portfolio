import { Facebook, FileText, Fiverr, GitHub, Globe, LinkedIn, Mail, Twitter } from './Icons';

const MAP = {
  linkedin: LinkedIn,
  facebook: Facebook,
  github: GitHub,
  fiverr: Fiverr,
  twitter: Twitter,
  mail: Mail,
  file: FileText,
  globe: Globe,
};

/** Resolves a `socials[].icon` key to its icon component. */
export function socialIcon(name) {
  return MAP[name] || Globe;
}
