import React, { useContext, useState } from 'react'
import { excelDataService } from 'services/excelDataService'
import { AiFillFileAdd } from 'react-icons/ai'
import XLSX from 'xlsx'
import { store } from 'store/store'

export const ExcelAdd = () => {

    const { dispatch, state } = useContext(store)

    function upload({ target: { files, value } }) {
        const regex = /^([a-zA-Z\u0590-\u05fe0-9\s_\\.,\-:])+(.xls|.xlsx)$/
        if (regex.test(value.toLowerCase())) {
            if (typeof (FileReader) !== undefined) {
                const reader = new FileReader()
                const filenameRegex = /[ a-zA-Z\u0590-\u05fe0-9_]+?(?=\.)/
                if (reader.readAsBinaryString) {
                    reader.onload = ({ target: { result } }) => {
                        const filename = value.match(filenameRegex)[0]
                        if (doesAlreadyExist(filename)) {

                        }
                        const sheets = processExcel(result)
                        const excel = { sheets, filename }
                        const excelToAdd = excelDataService.add(excel)
                        dispatch({ type: 'ADD_EXCEL', excel })
                    }
                    reader.readAsBinaryString(files[0])
                } else {
                    reader.onload = (ev) => {
                        reader.readAsArrayBuffer(files[0])
                    }
                }
            }
        }
    }

    function doesAlreadyExist(filename) {
        const { excels } = state.excelReducer
        return excels.some(excel => excel.filename === filename)
    }

    function processExcel(data) {
        const workbook = XLSX.read(data, {
            type: 'binary'
        })

        const { Sheets, SheetNames } = workbook

        const excelSheets = SheetNames.map(name => {
            const rows = XLSX.utils.sheet_to_row_object_array(Sheets[name])
            const sheet = {
                name,
                rows
            }
            return sheet
        })

        return excelSheets
    }

    return (
        <div className="excel-add excel-preview">
            <label className="upload-label font-sans flex justify-center cursor-pointer" htmlFor="uploader">
                <AiFillFileAdd size={40} className=" self-center" />
            </label>
            <input onChange={upload} hidden

                type="file" id="uploader" />
        </div>
    )
}
