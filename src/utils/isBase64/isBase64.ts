export const isBase64 = (str: string): boolean => {
    return str?.includes('data:image', 0);
};
