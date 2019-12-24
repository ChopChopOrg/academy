type Item = {
    id: number;
    category: string;
};

type ItemWithStaticCategory<T> = Omit<Item, 'category'> & { category: T };

export const filterByCategory = <T extends string>(
    items: Item[],
    category: T
) => {
    return items.filter(
        (item): item is ItemWithStaticCategory<T> => item.category === category
    );
};
