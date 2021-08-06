import { useContext, useEffect, useState } from 'react'
import { excelDataService } from 'services/excelDataService'
import { store } from 'store/store'

export function useFilteredRes(filterBy) {
    const [filteredRes, setFilteredRes] = useState(null)

    useEffect(() => {
        const filteredResToSet = excelDataService.getFilteredCells(filterBy)
        setFilteredRes(filteredResToSet)
    }, [filterBy])

    return [filteredRes, setFilteredRes]
}