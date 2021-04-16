import React, { useCallback, useContext, useEffect, useState, useRef } from 'react'
import { excelDataService } from 'services/excelDataService'
import { store } from 'store/store'
import { ResList } from 'cmps/Data/ResList'
import { DataFilter } from 'cmps/Data/DataFilter'
import { useTogglePopover } from 'hooks/useTogglePopover';
import { DataCorrModal } from 'cmps/Data/DataCorrModal/DataCorrModal';
import BtnOpenCorr from 'cmps/Data/BtnAction';
import { BsClipboardData } from 'react-icons/bs'
import { useFilteredRes } from 'hooks/useFilteredRes'

export const Data = () => {

    const { state, dispatch } = useContext(store)
    const { excels } = state.excelReducer
    const [filterBy, setFilterBy] = useState({ column: '', txt: '' })
    const [filteredRes, setFilteredRes] = useFilteredRes(filterBy)
    const [resSliceIdx, setSliceIdx] = useState(0)
    const [isDataCorrOpen, toggleDataCorr, ref] = useTogglePopover()


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
        excelDataService.createCellsByColMap(excelsToSet)
    }, [])

    // useEffect(() => {
    //     const filteredResToSet = excelDataService.getFilteredCells(filterBy)
    //     setFilteredRes(filteredResToSet)
    // }, [filterBy])

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

            <div className="data-corr">
                <BtnOpenCorr
                    icon={BsClipboardData}
                    size={50}
                    title='Correlate Data'
                    className={"btn-open-data-corr"}
                    onClick={(ev) => {
                        ev.stopPropagation()
                        toggleDataCorr()
                    }}
                />
                <DataCorrModal
                    isOpen={isDataCorrOpen}
                    ref={ref}
                />
            </div>

        </div >
    )
}
