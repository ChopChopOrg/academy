import { animate } from '.';

describe('animate', () => {
    it('should set initial animation state', () => {
        const element = {
            style: {},
        };

        animate(element, { top: '10px' }, { top: '30px' }, 300);
        expect(element.style.top).toBe('10px');
    });

    it('should animate to the new state', done => {
        const element = {
            style: {},
        };

        animate(element, { top: '10px' }, { top: '30px' }, 300);

        setTimeout(() => {
            expect(element.style.top).toBe('30px');
            done();
        }, 301);
    });

    it('should take the specified time to animate', done => {
        const element = {
            style: {},
        };

        animate(element, { top: '10px' }, { top: '30px' }, 300);

        setTimeout(() => {
            expect(element.style.top).toBe('10px');
        }, 299);

        setTimeout(() => {
            expect(element.style.top).toBe('30px');
            done();
        }, 301);
    });
});
