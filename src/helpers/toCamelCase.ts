export const toCamelCase = (str: string) => {
    return str
        .replace(/\s(.)/g, function (match) {
            return match.toUpperCase();
        })
        .replace(/\s/g, "")
        .replace(/^(.)/, function (match) {
            return match.toLowerCase();
        });
};
