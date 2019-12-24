export const animate = (element, from, to, time) => {
    Object.assign(element.style, from);

    setTimeout(() => {
        Object.assign(element.style, to);
    }, time);
};
