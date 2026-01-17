import { getAllData } from '@/data';

import { LandingPage } from '@/LandingPage';
import { ExerciseTable } from '@/components/ExerciseTable';
import { ExerciseTableInstruction } from '@/components/ExerciseTableInstruction';
import { ExerciseTableRow } from '@/components/ExerciseTableRow';
import { ExerciseTableTitle } from '@/components/ExerciseTableTitle';
import { HorizontalRule } from '@/components/HorizontalRule';
import { PageContent } from '@/components/PageContent';
import { PageLogo } from '@/components/PageLogo';
import { SectionNavigation } from '@/components/SectionNavigation';
import { Table } from '@/components/Table';
import { TableRow } from '@/components/TableRow';
import { TableRowLabel } from '@/components/TableRowLabel';
import { TableTitle } from '@/components/TableTitle';
import { Fragment } from '@/utils/el';

/**
 * @returns {DocumentFragment}
 */
export const App = () => {
    const params = new URLSearchParams(window.location.search);

    const data = getAllData();
    const section = data.find((s) => s.id === parseInt(params.get('section')));

    if (!section) {
        return Fragment(PageLogo(), SectionNavigation(data), LandingPage());
    }

    const snippetsContent = section.collections.flatMap((collection) => {
        const { name, snippets } = collection;

        const snippetRows = snippets.flatMap(({ label, output, snippet }) => {
            return [TableRowLabel(label), TableRow(snippet, output)];
        });

        return [Table([TableTitle(name), ...snippetRows]), HorizontalRule()];
    });

    const exercisesContent = section.exercises?.flatMap((exercise, i) => {
        const { instructions, solution, snippet } = exercise;

        return [
            ExerciseTable([
                ExerciseTableTitle(`Exercise #${i + 1}`),
                ExerciseTableInstruction(instructions),
                ExerciseTableRow(snippet, solution),
            ]),
        ];
    });

    return Fragment(
        PageLogo(`#${section.id} — ${section.title}`),
        SectionNavigation(data, section.id),
        PageContent([...snippetsContent, ...(exercisesContent ?? [])])
    );
};
