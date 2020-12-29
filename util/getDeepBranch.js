const getDeep = (item) => {
    if (!item.children || item.children.length == 0) return 1;

    return (
        1 +
        item.children
            .map((child) => getDeep(child))
            .sort()
            .reverse()[0]
    );
};

export default getDeep;
