
export const storageService = {
    save,
    load
}

function save(key, entity) {
    var item = JSON.stringify(entity)
    localStorage.setItem(key, item)
}

function load(key) {
    return JSON.parse(localStorage.getItem(key))
}