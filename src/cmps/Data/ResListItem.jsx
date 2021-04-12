import React, { useState } from 'react'
import onClickOutside from "react-cool-onclickoutside"
import { AiOutlineCopy } from 'react-icons/ai'
import { BsClipboardData } from 'react-icons/bs'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import BtnCopy from './BtnAction';
import BtnOpenCorr from './BtnAction';
import { useTogglePopover } from 'hooks/useTogglePopover';
import { DataCorrModal } from './DataCorrModal';

export const ResListItem = ({ className, children }) => {
    const [isDataCorrOpen, toggleDataCorr, ref] = useTogglePopover()

    return (
        <li className={`${className}`}>
            <div className="text">{children}</div>
            <CopyToClipboard text={children}>
                < BtnCopy
                    icon={AiOutlineCopy}
                    size={30}
                    title='Copy to Clipboard'
                />
            </CopyToClipboard>
            <div className="data-corr">
                <BtnOpenCorr
                    icon={BsClipboardData}
                    size={30}
                    title='Correlate Data'
                    className={"btn-open-data-corr"}
                    onClick={() => toggleDataCorr(!isDataCorrOpen)}
                /> 
                    <DataCorrModal isOpen={isDataCorrOpen} ref={ref} />
                
            </div>
        </li>
    )
}

// export const ResListItem = React.memo(_ResListItem)