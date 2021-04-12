import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { AiOutlineMore } from 'react-icons/ai'
import  ExcelActionsPopover  from 'cmps/shared/DefaultActionsPopover/DefaultActionsPopover'

const _ExcelPreview = ({ excel, history }) => {

    const { filename } = excel
    const [isActionsOpen, toggleActions] = useState(false)

    return (

        <div className="excel-preview cursor-pointer flex flex-col" onClick={() => { history.push(`/excel/${excel._id}`) }}>

            <ExcelActionsPopover title="Excel Actions">
                <li>Delete Excel</li>
                <li>Change Name</li>
            </ExcelActionsPopover>
            <div className="preview-img-container flex-grow">
                {/* <iframe width="100%" height="200" src={`/table/${excel._id}`}></iframe> */}
                <img />
            </div>
            <h3 className="title py-2">{filename}</h3>
        </div>
    )
}

export const ExcelPreview = withRouter(_ExcelPreview)
