import React, { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { BsClipboardData } from 'react-icons/bs'
import { useTogglePopover } from 'hooks/useTogglePopover'
import BtnAction from './BtnAction'
import { ResDetailsModal } from 'cmps/Data/ResDetailsModal/ResDetailsModal'
import { store } from 'store/store'

export const ResListItem = ({ className, children }) => {

    const [isDetailsModalOpen, toggleDetailsModal, detailsModalEl] = useTogglePopover()
    const [detailsModalPos, setDetailsModalPos] = useState(null)

    const { dispatch } = useContext(store)

    useEffect(() => {
        if (!detailsModalPos) return
        toggleDetailsModal()
        dispatch({ type: 'TOGGLE_OVERLAY' })
    }, [detailsModalPos])


    function onOpenModal(ev) {
        ev.stopPropagation()
        const { clientX, clientY } = ev
        setDetailsModalPos({ clientX, clientY })
    }

    return (
        <>
            <li className={`${className}`}>
                <div className="text">{children}</div>
                <CopyToClipboard text={children}>
                    < BtnAction
                        icon={AiOutlineCopy}
                        size={30}
                        title='Copy to Clipboard'
                    />
                </CopyToClipboard >

                <BtnAction
                    icon={BsClipboardData}
                    size={30}
                    title='Details'
                    className={"btn-open-details"}
                    onClick={onOpenModal}
                />
            </li>
            {
                isDetailsModalOpen &&
                <ResDetailsModal
                    ref={detailsModalEl}
                    pos={detailsModalPos}
                    item={children}
                    close={() => {
                        toggleDetailsModal()
                        dispatch({ type: 'CLOSE_OVERLAY' })
                    }}
                />
            }
        </>
    )
}

// export const ResListItem = React.memo(_ResListItem)