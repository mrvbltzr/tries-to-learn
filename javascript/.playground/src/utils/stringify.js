/**
 * @param {object} object
 */
export const stringify = (object) => {
    const stringify = JSON.stringify(
        object,
        (_key, value) => {
            if (typeof value === 'number') {
                if (Number.isNaN(value)) {
                    return '___NAN___';
                }

                if (value === Infinity) {
                    return '__INFINITY__';
                }

                if (value === -Infinity) {
                    return '__-INFINITY__';
                }
            }

            if (value === undefined) {
                return '__UNDEFINED__';
            }

            return value;
        },
        4
    );

    return stringify
        .replace(/"___NAN___"/g, 'NaN')
        .replace(/"__UNDEFINED__"/g, 'undefined')
        .replace(/"__INFINITY__"/g, 'Infinity')
        .replace(/"__-INFINITY__"/g, '-Infinity');
};
