import React, { useCallback, useContext, useEffect, useState } from 'react'
import { excelDataService } from 'services/excelDataService'
import { utilService } from 'services/utilService'
import { store } from 'store/store'
import { ResList } from 'cmps/Data/ResList'
import { ResListItem } from 'cmps/Data/ResListItem'
import { DataFilter } from 'cmps/Data/DataFilter'
// import { DataCorrelation } from 'cmps/Data/DataCorrelation'
export const Data = () => {

    const { state, dispatch } = useContext(store)
    const { excels } = state.excelReducer
    const [filterBy, setFilterBy] = useState({ column: '', txt: '' })
    const [filteredRes, setFilteredRes] = useState(null)
    const [resSliceIdx, setSliceIdx] = useState(0)

    const onScrollEnd = useCallback(({ target: { scrollTop, offsetHeight, scrollHeight } }) => {
        if (scrollTop + offsetHeight >= scrollHeight) {
            setSliceIdx(resSliceIdx + 1)
        }
    }, [])

    useEffect(() => {
        let excelsToSet = excels
        if (!excelsToSet) {
            excelsToSet = [...excelDataService.query()]
            dispatch({ type: 'SET_EXCELS', excels: excelsToSet })
        }
        excelDataService.createRowsByColMap(excelsToSet)
    }, [])

    useEffect(() => {
        const filteredResToSet = excelDataService.getFilteredCells(filterBy)
        setFilteredRes(filteredResToSet)
    }, [filterBy])

    useEffect(() => {
        if (!resSliceIdx) return
        const filteredResToAdd = excelDataService.getFilteredCells(filterBy, resSliceIdx)
        if (!filteredResToAdd) return
        setFilteredRes([...filteredRes, ...filteredResToAdd])
    }, [resSliceIdx])

    function handleChange({ target: { name, value } }) {
        if (name === 'column') setSliceIdx(0)
        setFilterBy({ ...filterBy, [name]: value })
    }


    if (!excels) return <h1>Loading...</h1>

    return (
        <div className="data-page main-layout grid content-center justify-items-center">
            <DataFilter
                excels={excels}
                filterBy={filterBy}
                handleChange={handleChange}
            />
            <section
                className="search-results flex flex-col data-grid-layout">
                {filteredRes && <ResList
                    filteredRes={filteredRes}
                    onScrollEnd={onScrollEnd}
                />}
            </section>

        </div >
    )
}
