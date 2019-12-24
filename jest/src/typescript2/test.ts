import { filterByCategory } from '.';

describe('filterByCategory', () => {
    it('should filter the items', () => {
        expect(
            filterByCategory(
                [
                    {
                        id: 1,
                        category: 'foo',
                    },

                    {
                        id: 2,
                        category: 'bar',
                    },

                    {
                        id: 3,
                        category: 'foo',
                    },
                ],
                'foo'
            )
        );
    });
});
