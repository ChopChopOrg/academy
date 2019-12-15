export const pluralize = (number, noun) => {
    if (number > 1 || number === 0) {
        if (noun === 'foot') {
            noun = 'feet';
        } else {
            noun += 's';
        }
    }

    return `${number} ${noun}`;
};
