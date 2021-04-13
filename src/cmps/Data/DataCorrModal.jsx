import { ColSelect } from 'cmps/shared/ColSelect'
import React, { useState } from 'react'


const DEFAULT_SEARCH_STATE = {
    txt: '',
    colToSearchIn: ''
}

/* forwardRef is used in order to pass the onClickOutside ref (see useTogglePopover). */
export const DataCorrModal = React.forwardRef(({ isOpen }, ref) => {

    const [search, setSearch] = useState(DEFAULT_SEARCH_STATE)

    function handleChange({ target: { name, value } }) {
        setSearch({ ...search, [name]: value })
    }

    return (
        <div ref={ref}
            className={`data-corr-modal ${isOpen && 'open'}`}
        >
            <h1 className="title">
                Data Correlation
            </h1>

            <input
                className="txt default-input"
                type="text"
                name="txt"
                value={search.txt}
                onChange={handleChange}
            />

            <ColSelect
                name="colToSearchIn"
                value={search.colToSearchIn}
                onChange={handleChange}
            />

        </div >
    )
})

/*  */