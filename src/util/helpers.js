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
export const removeFromArray = (array, findFn) => {
    const index = array.findIndex(findFn);
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
}
export const getParam = (str, separator, index) => str.split(separator)[index].split('&')[0];
export const isEmail = (str) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
}