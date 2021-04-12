import React, { useState } from 'react'
import { AiOutlineMore as MoreHorizIcon } from 'react-icons/ai'
import onClickOutside from "react-cool-onclickoutside"
import BtnShowActions from 'cmps/Data/BtnAction'
import { useTogglePopover } from 'hooks/useTogglePopover'

export default ({ className, children, title }) => {

    const [isOpen, toggle, ref] = useTogglePopover(false)
    // const toggle = () => setIsOpen(!isOpen)

    // const ref = onClickOutside((ev) => {
    //     if (isOpen) setIsOpen(false)
    // });

    return (
        <div ref={ref} onClick={(ev) => {
            ev.stopPropagation()

        }} className="default-actions-popover-container">
            {/* <MoreHorizIcon onClick={toggle} className="btn-actions" /> */}
            <BtnShowActions
                icon={MoreHorizIcon}
                className="btn-actions"
                onClick={toggle}
                size={30}
            />
            {isOpen &&
                <div className={`default-actions-popover ${className}`}>
                    <h3 className="default-actions-popover-header">{title}</h3>
                    <ul className="default-actions-popover-list clear-list">
                        {children}
                    </ul>
                </div>
            }
        </div>

    )
}