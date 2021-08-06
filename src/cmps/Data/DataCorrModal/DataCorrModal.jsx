import { useFilteredRes } from 'hooks/useFilteredRes'
import React, { useState, useCallback } from 'react'
import { excelDataService } from 'services/excelDataService'
import { utilService } from 'services/utilService'
import { ResList } from '../ResList'
import { DataCorrSearch } from './DataCorrSearch'


const DEFAULT_SEARCH_STATE = {
    txt: '',
    colToSearchFrom: '',
    column: ''
}

/* forwardRef is used in order to pass the onClickOutside ref (see useTogglePopover). */
export const DataCorrModal = React.forwardRef(
    ({ isOpen }, ref) => {

        const [search, setSearch] = useState(DEFAULT_SEARCH_STATE)
        const [filteredRes] = useFilteredRes(search)
        const [resSliceIdx, setSliceIdx] = useState(0)

        const onScrollEnd = useCallback((ev) => utilService.onScrollEnd(ev, setSliceIdx(resSliceIdx + 1)))

        function handleChange({ target: { name, value } }) {
            setSearch({ ...search, [name]: value })
        }

        // excelDataService.getCorrelatedCells()
        if (!filteredRes) return <h1>Loading...</h1>

        return (
            <div ref={ref}
                className={`data-corr-modal ${isOpen && 'open'}`}
            >
                <h1 className="title">
                    Data Correlation
                </h1>

                <DataCorrSearch
                    handleChange={handleChange}
                    search={search}
                />

                {/* <ResList
                filteredRes={filteredRes}
                onScrollEnd={onScrollEnd}
            /> */}
            </div >
        )
    }
)
