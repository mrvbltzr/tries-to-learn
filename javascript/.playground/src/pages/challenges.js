/* global AOS */
import { challenges } from '@/data';

import { HorizontalRule } from '@/components/HorizontalRule';
import { Logo } from '@/components/Logo';
import { Table } from '@/components/Table';
import { TableSnippetRow } from '@/components/TableSnippetRow';
import { TableSnippetRowLabel } from '@/components/TableSnippetRowLabel';
import { TableTitle } from '@/components/TableTitle';

/**
 * @param {HTMLElement} logoEl
 * @param {HTMLElement} appEl
 */
export function challengesPage(logoEl, appEl) {
    logoEl.appendChild(Logo('Challenges'));

    appEl.append(
        ...challenges.examples.snippets.flatMap((examples) => {
            const { label, run, snippet } = examples;

            return [
                Table([TableTitle(label), TableSnippetRowLabel(label), TableSnippetRow(snippet, run)]),
                HorizontalRule(),
            ];
        })
    );

    AOS.init({ once: true });
}
