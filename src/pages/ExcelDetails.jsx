import { SheetList } from 'cmps/SheetList'
import React, { useState, useEffect } from 'react'
import { excelDataService } from 'services/excelDataService'

export const ExcelDetails = ({ match }) => {
    const [excel, setExcel] = useState(null)

    useEffect(() => {
        const { id } = match.params
        const excelToSet = excelDataService.getById(id)
        setExcel(excelToSet)
    }, [])

    if (!excel) return <h1>Loading...</h1>

    return (
        <div className="excel-details main-layout">
            <SheetList
                sheets={excel.sheets}
            />
        </div>
    )
}
