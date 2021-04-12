import React from 'react'
import { SheetPreview } from './SheetPreview'

export const SheetList = ({ sheets }) => {
    return (
        <div className="sheet-list flex flex-col">
            {sheets.map(sheet => <SheetPreview key={sheet.id} sheet={sheet} />)}
        </div>
    )
}
