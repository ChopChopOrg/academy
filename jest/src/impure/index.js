import { config } from './config';

export const convertUnits = number => {
    let divideBy = 10;
    let largeUnit = 'cm';
    let smallUnit = 'mm';
    if (config.units === 'inch') {
        divideBy = 8;
        largeUnit = 'inch';
        smallUnit = 'eights';
    }

    const wholes = Math.floor(number / divideBy);
    const bits = number - wholes * divideBy;

    const results = [];

    if (wholes) {
        results.push(`${wholes}${largeUnit}`);
    }

    if (bits) {
        results.push(`${bits}${smallUnit}`);
    }

    return results.join(' ');
};
