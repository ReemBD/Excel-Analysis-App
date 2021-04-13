import React, { useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import BtnCopy from './BtnAction';

export const ResListItem = ({ className, children }) => {

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

        </li>
    )
}

// export const ResListItem = React.memo(_ResListItem)