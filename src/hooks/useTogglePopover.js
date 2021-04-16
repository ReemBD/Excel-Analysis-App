import { useState } from "react";
import onClickOutside from "react-cool-onclickoutside"

export function useTogglePopover(initialVal = false) {

    const [isOpen, setIsOpen] = useState(initialVal)
    const toggle = () => {
        console.log({ isOpen });
        setIsOpen(!isOpen)
    }

    const ref = onClickOutside(({ target: { nodeName } }) => {
        if (nodeName !== 'svg' && nodeName !== 'path' && nodeName !== 'button') {
            if (isOpen) setIsOpen(false)
        }
    })

    return [isOpen, toggle, ref]
}