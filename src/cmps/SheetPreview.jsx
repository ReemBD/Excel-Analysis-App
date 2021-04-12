import React from 'react'

export const SheetPreview = ({ sheet }) => {

    const { name } = sheet
    return (
        <div className="sheet-preview cursor-pointer p-2 flex justify-between">
            <span className="sheet-name">{name}</span>
        </div>
    )
}
