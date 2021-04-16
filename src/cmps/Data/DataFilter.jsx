import React, { useState } from 'react'
import { excelDataService } from 'services/excelDataService'
import { ColSelect } from 'cmps/shared/ColSelect'
import { ResList } from './ResList'
export const DataFilter = ({ filterBy, handleChange }) => {



    return (
        <section className="data-filter flex items-center justify-between data-grid-layout">

            <input
                type="text"
                className="search-input default-input"
                name="txt"
                value={filterBy.txt}
                onChange={handleChange}
                placeholder="Search..."
            />

            <ColSelect
                className="col-filter"
                value={filterBy.column}
                name="column"
                onChange={handleChange}
            />

        </section>
    )
}
