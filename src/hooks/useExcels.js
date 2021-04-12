import { useEffect, useState } from 'react'
import { excelDataService } from 'services/excelDataService'

export function useExcels() {
    const [excels, setExcels] = useState(null)
    useEffect(() => {
        const excelsToSet = excelDataService.query()
        setExcels(excelsToSet)

    }, [])

    return excels
}