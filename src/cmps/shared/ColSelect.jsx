import React from 'react'
import { excelDataService } from 'services/excelDataService'

export const ColSelect = ({ ...restOfProps }) => {
    return (
        <select className="col-filter" id="colSearch"  {...restOfProps} >
            <option value="">All</option>
            {excelDataService.getAllCols().map(colName => <option key={colName} value={colName}>{colName}</option>)}
        </select>
    )
}
