import React from 'react'
import { ColSelect } from 'cmps/shared/ColSelect'


export const DataCorrSearch = ({ search, handleChange }) => {

    const { txt, colToSearchFrom, column } = search
    return (
        <div className="data-corr-search">

            <input
                className="txt default-input"
                type="text"
                name="txt"
                placeholder="Search..."
                value={txt}
                onChange={handleChange}
            />

            <ColSelect
                name="colToSearchBy"
                value={colToSearchFrom}
                onChange={handleChange}
            />

            <ColSelect
                name="column"
                value={column}
                onChange={handleChange}
            />

        </div>
    )
}
