'use strict';

import { excelDataService } from "./excelDataService";

export const utilService = {
    storeToStorage,
    loadFromStorage,
    getRandomInt,
    getRandomId,
    extractColumns,
    onScrollEnd
}

function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}


function getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = getRandomInt(1000, 9999).toString(16);
    var pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
    var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
    var min = (num1 <= num2) ? num1 : num2;
    return (Math.floor(Math.random() * (max - min)) + min);
}


function extractColumns(excels) {

    const colSet = new Set()

    excels.forEach(({ sheets }) => {
        sheets.forEach((sheet) => {
            const { rows } = sheet
            const currHeaderCells = excelDataService.getHeaderCells(rows[0])
            currHeaderCells.forEach(headerCell => {
                colSet.add(headerCell)
            })
        })
    })

    return Array.from(colSet)
}

function onScrollEnd({ target: { scrollTop, offsetHeight, scrollHeight } }, callback) {
    if (scrollTop + offsetHeight >= scrollHeight) {
        callback()
    }
}