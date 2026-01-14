/* global AOS */
import { sections } from '@/data';

import { HorizontalRule } from '@/components/HorizontalRule';
import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { NoSectionSelected } from '@/components/NoSectionSelected';
import { Table } from '@/components/Table';
import { TableSnippetRow } from '@/components/TableSnippetRow';
import { TableSnippetRowLabel } from '@/components/TableSnippetRowLabel';
import { TableTitle } from '@/components/TableTitle';

/**
 * @param {HTMLElement} logoEl
 * @param {HTMLElement} navEl
 * @param {HTMLElement} appEl
 * @param {URLSearchParams} params
 */
export function snippetsPage(logoEl, navEl, appEl, params) {
    const sectionNumber = parseInt(params.get('section'));
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

    logoEl.appendChild(Logo(section?.title ?? 'Snippets'));
    navEl.appendChild(Navigation(sections, sectionNumber));
    appEl.append(...content);

    AOS.init({ once: true });
}
