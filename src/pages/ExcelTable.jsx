import React, { useEffect, useState } from 'react'
import { excelDataService } from 'services/excelDataService'

export const ExcelTable = ({ match }) => {
    const [table, setTable] = useState(null)

    useEffect(() => {
        const { id } = match.params
        const tableToSet = excelDataService.getById(id)
        setTable(tableToSet)
    }, [])

    if (!table) return <h1>Loading...</h1>

    const { excelRows: rows } = table
    const headerRow = Object.keys(rows[0])
    return (
        <div className="excel-table">
            {/* {tableToRender()} */}
            <table className="main-layout">
            <tr className="table-head">
                {headerRow.map(cellTitle => <th key={cellTitle}>{cellTitle}</th>)}
            </tr>
            {rows.map(row => {
                const rowValues = Object.values(row)
                return <tr>
                    {rowValues.map(val => <td key={val}>{val}</td>)}
                </tr>
            })}
        </table>
        </div>
    )
}
