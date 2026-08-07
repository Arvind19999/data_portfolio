import { useEffect } from 'react';
import { profile } from '../data/site';

/** Sets the document title and meta description per page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} — ${profile.name} | ${profile.role}`
      : `${profile.name} — ${profile.role}`;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
