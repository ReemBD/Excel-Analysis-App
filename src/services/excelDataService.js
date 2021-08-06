import { db } from "config";
import { storageService } from "./storageService";
import { utilService } from "./utilService";

export const excelDataService = {
  query,
  add,
  getById,
  getFilteredCells,
  getColCells,
  getAllCols,
  getCorrelatedCells,
  createCellsByColMap,
  getHeaderCells,
};

const ref = db.ref("/excels");
ref.on("value", (snap) => {
  console.log("val: ", snap.val());
});

const STORAGE_KEY = "excels";
const state = {
  filterBy: { column: "", txt: "" },
  currSlice: {
    idx: 0,
    size: 50,
  },
  cellsByColMap: null,
  exclusiveCellsByColMap: {},
  cache: {},
};

function query() {
  const excels = storageService.load(STORAGE_KEY) || [];

  return excels;
}

function getFilteredCells({ column, txt, colToSearchFrom }, sliceIdx = 0) {
  const regex = new RegExp(txt);
  const { exclusiveCellsByColMap, currSlice } = state;

  let mapKey;
  if (column) {
    mapKey = exclusiveCellsByColMap[column];
  } else {
    mapKey = [];
    const rowsByColArr = Object.values(exclusiveCellsByColMap);
    rowsByColArr.forEach((row) => mapKey.push(...row));
  }

  const sliceFrom = currSlice.idx * currSlice.size;
  const sliceTo = sliceFrom + currSlice.size;

  if (!mapKey[sliceFrom]) return null;
  if (txt) mapKey = mapKey.filter((cell) => regex.test(cell.txt));

  _setSliceIdx(sliceIdx);
  const keySlice = mapKey.slice(
    sliceFrom,
    mapKey[sliceTo] ? sliceTo : mapKey.length
  );

  return keySlice;
}

function getCorrelatedCells(excels, cell) {
  const excelsDeepCopy = JSON.parse(JSON.stringify(query()));
  const relatedCellsByColMap = {};

  for (const excel of excelsDeepCopy) {
    const { sheets } = excel;
    for (const sheet of sheets) {
      const { rows } = sheet;
      for (const row of rows) {
        const rowVals = Object.values(row);
        if (rowVals.includes(cell)) {
          for (const col in row) {
            if (!relatedCellsByColMap[col]) relatedCellsByColMap[col] = [];
            if (row[col] !== cell) relatedCellsByColMap[col].push(row[col]);
          }
        }
      }
    }
  }
  console.log({ relatedCellsByColMap });
  return relatedCellsByColMap;
}

function createCellsByColMap(excels) {
  const excelsData = excels || query();
  // let doesExistMap = {} //an alternative for new Set, since the items are objects.
  if (state.cellsByColMap) return;

  state.cellsByColMap = {};
  const { cellsByColMap, exclusiveCellsByColMap } = state;

  for (const excel of excelsData) {
    const { sheets } = excel;

    for (const sheet of sheets) {
      const { rows } = sheet;
      const headerCells = getHeaderCells(sheet.rows[0]);
      for (const row of rows) {
        const rowVals = Object.values(row);
        const colVals = Object.keys(row);

        for (let i = 0; i < rowVals.length; i++) {
          const currCell = {
            txt: rowVals[i],
            relatedCellsByCol: {},
          };

          let newCurrCell;
          const currColKey = headerCells[i];

          if (!cellsByColMap[currColKey]) {
            newCurrCell = {
              txt: rowVals[i],
              relatedCellsByCol: {},
            };
            cellsByColMap[currColKey] = [];
            exclusiveCellsByColMap[currColKey] = new Set();
          }
          // newCurrCell.relatedCellsByCol
          if (currColKey !== currCell.txt) {
            // if (!currColCells) {
            //     cellsByColMap[currColKey] = []
            //     exclusiveCellsByColMap[currColKey] = new Set()
            // }

            cellsByColMap[currColKey].push(currCell);
            exclusiveCellsByColMap[currColKey].add(currCell.txt);
          }
          // newCurrCell = cellsByColMap[currColKey].find(c => c.txt === currCell.txt)
          // newCurrCell = newCurrCell ? {
          //     ...newCurrCell,
          //     relatedCellsByCol: newCurrCell.relatedCellsByCol ?
          //         {
          //             ...newCurrCell.relatedCellsByCol, [headerCells[i]]
          //                 : newCurrCell.relatedCellsByCol[headerCells[i]] ?
          //                     [...newCurrCell.relatedCellsByCol[headerCells[i]], rowVals[i]]
          //                     : [rowVals[i]]
          //         } : {
          //             {
          //     [headerCells[i]]
          // }
          //         }
          // } : {}

          // const getUpdateRelatedCells = () => {
          //     const rowCopy = { ...row }
          //     delete rowCopy[colVals[i]]
          //     if (!newCurrCell.relatedCellsByCol) {
          //         newCurrCell.relatedCellsByCol = {
          //             ...rowCopy
          //         }
          //     } else {
          //         let currRelatingCol = newCurrCell.relatedCellsByCol[headerCells[i]]
          //         if (!currRelatingCol) currRelatingCol = ''
          //         for (const currCol in currRelatingCol) {
          //             currRelatingCol[currCol] = ''
          //         }
          //     }

          //     // const currRelatedCells = newCurrCell.relatedCellsByCol
          //     // for (const currRelatedCellsCol in newCurrCell.relatedCellsByCol) {
          //     //     if (!currRelatedCells[currRelatedCellsCol])
          //     // }
          // }
        }
      }
    }
  }

  for (const col in exclusiveCellsByColMap) {
    exclusiveCellsByColMap[col] = Array.from(exclusiveCellsByColMap[col]);
  }
}

function getColCells(col) {
  return state.cellsByColMap[col];
}

function getAllCols() {
  return Object.keys(state.cellsByColMap);
}

function getHeaderCells(firstRow) {
  const regex = new RegExp("__EMPTY");
  const rowKeys = Object.keys(firstRow);
  return regex.test(rowKeys) ? Object.values(firstRow) : rowKeys;
}

function _setSliceIdx(idx) {
  state.currSliceIdx = idx;
}

function add(excelToAdd) {
  excelToAdd._id = utilService.getRandomId();
  excelToAdd.addedAt = Date.now();
  excelToAdd.sheets.forEach((sheet) => {
    sheet.id = utilService.getRandomId();
  });
  console.log("excelToADd: ", excelToAdd);
  ref.push().set(excelToAdd);
  const excels = query();
  excels.push(excelToAdd);
  _saveExcels(excels);
  return excelToAdd;
}

function getById(id) {
  return query().find((excel) => excel._id === id);
}

function _saveExcels(excels) {
  storageService.save(STORAGE_KEY, excels);
  return excels;
}
