import { pluralize } from '.';

describe('pluralize', () => {
    it('should pluralize the noun', () => {
        expect(pluralize(5, 'apple')).toBe('5 apples');
    });

    it('should keep noun unchanged for count 1', () => {
        expect(pluralize(1, 'bear')).toBe('1 bear');
    });

    it('should pluralize the noun for count 0', () => {
        expect(pluralize(0, 'user')).toBe('0 users');
    });

    it('should correctly pluralize exceptions', () => {
        expect(pluralize(12, 'foot')).toBe('12 feet');
    });
});
