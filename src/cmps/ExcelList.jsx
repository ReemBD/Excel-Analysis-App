import React from 'react'
import { ExcelPreview } from './ExcelPreview'
import { ExcelAdd } from './ExcelAdd'
export const ExcelList = ({ excels }) => {
    return (
        <div className="excel-list grid lg:grid-cols-6 sm:grid-cols-4 main-layout">
            {excels.map(excel => <ExcelPreview key={excel._id} excel={excel} />)}
            <ExcelAdd />
        </div>
    )
}
