export const addToStorage = (storageName, val) => {
    localStorage.setItem(storageName, JSON.stringify(val))
}

export const getFromStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName))
}
