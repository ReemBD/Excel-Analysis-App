import React, { useState } from 'react'
import { AiOutlineMore as MoreHorizIcon } from 'react-icons/ai'
import onClickOutside from "react-cool-onclickoutside"
import BtnShowActions from 'cmps/Data/BtnAction'
import { useTogglePopover } from 'hooks/useTogglePopover'
import {PopoverHeader} from 'cmps/shared/PopoverHeader'


export default ({ className, children, title }) => {

    const [isOpen, toggle, ref] = useTogglePopover(false)

    return (
        <div ref={ref}
             onClick={(ev) => {ev.stopPropagation()}}
             className="default-actions-popover-container"
        >

            <BtnShowActions
                icon={MoreHorizIcon}
                className="btn-actions"
                onClick={toggle}
                size={30}
            />
            
            {isOpen &&
                <div className={`default-actions-popover ${className}`}>
                    <PopoverHeader small>{title}</PopoverHeader>
                    <ul className="default-actions-popover-list clear-list">
                        {children}
                    </ul>
                </div>
            }
        </div>

    )
}