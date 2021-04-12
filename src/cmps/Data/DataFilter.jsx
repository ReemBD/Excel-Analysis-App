import React from 'react'
import { utilService } from 'services/utilService'

export const DataFilter = ({ excels, filterBy, handleChange }) => {

    return (
        <section className="data-filter flex items-center justify-between data-grid-layout">
            <input type="text" className="search-input" name="txt" value={filterBy.txt} onChange={handleChange} placeholder="Search..." />

            <select className="col-filter" id="colSearch" name="column" value={filterBy.column} onChange={handleChange} >
                <option value="">All</option>
                {utilService.extractColumns(excels).map(colName => <option key={colName} value={colName}>{colName}</option>)}
            </select>

        </section>
    )
}
