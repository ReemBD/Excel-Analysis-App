import React from 'react'
import { utilService } from 'services/utilService'
import { ResListItem } from 'cmps/Data/ResListItem'

const { getRandomId } = utilService


const _ResList = ({ filteredRes, onScrollEnd }) => {

    // const { txt } = cell
    return (
        <ul onScroll={onScrollEnd} className="filtered-cells-list list-none flex flex-col items-start">
            {filteredRes.map((txt) =>
                <ResListItem
                    key={getRandomId()}
                    className={"filtered-cells-list-item p-3 text-left flex justify-between items-center"}>
                    {txt}
                </ResListItem>
            )}
        </ul>
    )
}

export const ResList = React.memo(_ResList)
