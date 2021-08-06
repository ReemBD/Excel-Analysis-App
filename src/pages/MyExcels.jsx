import React, { useState, useEffect, useContext } from 'react'
import { store } from 'store/store'
import { ExcelList } from '../cmps/ExcelList'
import { excelDataService } from '../services/excelDataService'

export const MyExcels = () => {

    const { dispatch, state } = useContext(store)
    const { excels } = state.excelReducer

    useEffect(() => {
        const excelsToSet = [...excelDataService.query()]
        dispatch({ type: 'SET_EXCELS', excels: excelsToSet })
    }, [])

    function addExcel(excel) {
        dispatch({ type: 'ADD_EXCEL', excel })
    }

    if (!excels) return <h1>Loading...</h1>

    return (
        <div className="my-excels">
            <ExcelList excels={excels} addExcel={addExcel} />
        </div>
    )
}
