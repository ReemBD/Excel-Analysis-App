import React from 'react'
import { useTogglePopover } from 'hooks/useTogglePopover'

export const BtnOpenModal = ({ children, modal: Modal, button: Button, className, ...restOfProps }) => {

    const [isOpen, toggle, ref] = useTogglePopover(false)

    return (
        <div
            ref={ref}
            className={`btn-open-modal ${className}`}
            {...restOfProps}
        >
            { React.cloneElement(children, { onClick: toggle })}
            { isOpen && <Modal />}
        </div >
    )
}
