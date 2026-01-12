import '@/assets/style.css';

import { sections } from '@/data';

import { HorizontalRule } from '@/components/HorizontalRule';
import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { NoSectionSelected } from '@/components/NoSectionSelected';
import { Table } from '@/components/Table';
import { TableSnippetRow } from '@/components/TableSnippetRow';
import { TableSnippetRowLabel } from '@/components/TableSnippetRowLabel';
import { TableTitle } from '@/components/TableTitle';

(() => {
    const logoEl = document.getElementById('logo');
    const navEl = document.getElementById('navigation');
    const appEl = document.getElementById('app');

    if (!navEl || !appEl) {
        throw new Error("Necessary elements with ids 'navigation' and 'app' not found.");
    }

    const sectionNumber = parseInt(new URLSearchParams(window.location.search).get('section'));
    const section = sections.find((s) => s.section === sectionNumber);

    const content = !section
        ? [NoSectionSelected()]
        : section.examples.flatMap((examples) => {
              const { name, snippets } = examples;

              const snippetRows = snippets.flatMap(({ label, run, snippet }) => {
                  return [TableSnippetRowLabel(label), TableSnippetRow(snippet, run)];
              });

              return [Table([TableTitle(name), ...snippetRows]), HorizontalRule()];
          });

    logoEl.appendChild(Logo(section?.title));
    navEl.appendChild(Navigation(sections, sectionNumber));
    appEl.append(...content);
})();
