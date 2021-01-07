export const isValidObject = (obj) => {
    for (const key in obj) {
        if (!obj[key]) return false;
    }
    return true;
}
export const updateInArray = (array, findFn, updateFn) => {
    const index = array.findIndex(findFn);
    const elem = array.find(findFn);
    const newArray = [...array];
    newArray.splice(index, 1, updateFn(elem));
    return newArray;
}
export const getParam = (str, separator, index) => str.split(separator)[index].split('&')[0];