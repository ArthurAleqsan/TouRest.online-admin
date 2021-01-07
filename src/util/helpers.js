export const isValidObject = (obj) => {
    for (const key in obj) {
        if (!obj[key]) return false;
    }
    return true;
}