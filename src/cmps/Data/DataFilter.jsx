import React from 'react'
import { excelDataService } from 'services/excelDataService'
import { ColSelect } from 'cmps/shared/ColSelect'
export const DataFilter = ({ filterBy, handleChange }) => {

    return (
        <section className="data-filter flex items-center justify-between data-grid-layout">

            <input
                type="text"
                className="search-input"
                name="txt"
                value={filterBy.txt}
                onChange={handleChange}
                placeholder="Search..."
            />

            <ColSelect
                value={filterBy.column}
                name="column"
                onChange={handleChange}
            />
        </section>
    )
}
