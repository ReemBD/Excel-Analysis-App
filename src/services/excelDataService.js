import { storageService } from './storageService'
import { utilService } from './utilService'

export const excelDataService = {
    query,
    add,
    getById,
    getFilteredCells,
    createRowsByColMap,
    getHeaderCells
}

const STORAGE_KEY = 'excels'
const state = {
    filterBy: { column: '', txt: '' },
    currSlice: {
        idx: 0,
        size: 50
    },
    cellsByColMap: {
    },
    cache: {

    }
}

function query() {
    const excels = storageService.load(STORAGE_KEY) || []
    return excels
}

function getFilteredCells({ column, txt }, sliceIdx = 0) {
    const regex = new RegExp(txt)
    const { cellsByColMap, currSlice } = state

    let mapKey;
    if (column) {
        mapKey = cellsByColMap[column]
    } else {
        mapKey = []
        const rowsByColArr = Object.values(cellsByColMap)
        rowsByColArr.forEach(row => mapKey.push(...row))
    }

    const sliceFrom = currSlice.idx * currSlice.size
    const sliceTo = sliceFrom + currSlice.size

    if (!mapKey[sliceFrom]) return null
    if (txt) mapKey = mapKey.filter(cell => regex.test(cell.txt))

    _setSliceIdx(sliceIdx)
    const keySlice = mapKey.slice(sliceFrom, mapKey[sliceTo] ? sliceTo : mapKey.length)

    return keySlice
}

function createRowsByColMap(excels) {
    const { cellsByColMap } = state
    let excelsData = excels || query()
    let doesExistMap = {}

    excelsData.forEach(excel => {
        excel.sheets.forEach(sheet => {
            const headerCells = getHeaderCells(sheet.rows[0])
            sheet.rows.forEach(row => {
                const rowVals = Object.values(row)
                for (let i = 0; i < rowVals.length; i++) {
                    const currCell = { txt: rowVals[i] }
                    const currKey = cellsByColMap[headerCells[i]]
                    if (!doesExistMap[currCell.txt] && currKey) {
                        cellsByColMap[headerCells[i]].push(currCell)
                        doesExistMap[currCell.txt] = true
                    } else if (!currKey) {
                        cellsByColMap[headerCells[i]] = [currCell]
                        doesExistMap[currCell.txt] = true
                    }
                }
                // for (const col in row) {
                //     const currCell = { txt: row[col] }
                //     const currKey = regex.test(col) ? cellsByColMap[row[0]] : cellsByColMap[col]
                //     if (currKey && !doesExistMap[currCell.txt]) {
                //         doesExistMap[currCell.txt] = true
                //         cellsByColMap[col].push(currCell)
                //     }
                //     else if (!currKey) {
                //         cellsByColMap[col] = [currCell]
                //         doesExistMap[currCell.txt] = true
                //     }
                // }
            })
        })
    })
}

function getHeaderCells(firstRow) {
    const regex = new RegExp('__EMPTY')
    const rowKeys = Object.keys(firstRow)
    return regex.test(rowKeys) ? Object.values(firstRow) : rowKeys
}

function _setSliceIdx(idx) {
    state.currSliceIdx = idx
}

function add(excelToAdd) {
    excelToAdd._id = utilService.getRandomId()
    excelToAdd.addedAt = Date.now()
    excelToAdd.sheets.forEach(sheet => {
        sheet.id = utilService.getRandomId()
    })
    const excels = query()
    excels.push(excelToAdd)
    _saveExcels(excels)
    return excelToAdd
}

function getById(id) {
    return query().find(excel => excel._id === id)
}

function _saveExcels(excels) {
    storageService.save(STORAGE_KEY, excels)
    return excels
}




