import React from 'react'
import { excelDataService } from 'services/excelDataService'

export const ColSelect = ({ className, ...restOfProps }) => {
    return (
        <select className={`default-select ${className}`}   {...restOfProps} >
            <option value="">All</option>
            {excelDataService.getAllCols().map(colName => <option key={colName} value={colName}>{colName}</option>)}
        </select>
    )
}
