import { geocode } from '.';

jest.mock('ky', () => ({
    get() {
        return {
            async json() {
                return {
                    results: [
                        {
                            geometry: {
                                location: {
                                    lat: 13,
                                    lng: 42,
                                },
                            },
                        },
                    ],
                };
            },
        };
    },
}));

describe('geocode', () => {
    it('should return the location in the correct format', async () => {
        expect(await geocode('foo')).toEqual({
            lat: 13,
            lng: 42,
        });
    });
});
