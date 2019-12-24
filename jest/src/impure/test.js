import { convertUnits } from '.';

describe('convertUnits', () => {
    it('should convert units', () => {
        expect(convertUnits(42)).toBe('4cm 2mm');
    });

    it('should only display small part if large part is 0', () => {
        expect(convertUnits(8)).toBe('8mm');
    });

    it('should not display small part when not present', () => {
        expect(convertUnits(20)).toBe('2cm');
    });
});
