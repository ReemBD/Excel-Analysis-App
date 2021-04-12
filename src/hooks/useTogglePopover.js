import { useEffect, useState } from "react";
import onClickOutside from "react-cool-onclickoutside"

export function useTogglePopover(initialVal = false) {
    let [isOpen, setIsOpen] = useState(initialVal)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const ref = onClickOutside((ev) => {
        if (isOpen) setIsOpen(false)
    });

    return [isOpen, toggle, ref]
}