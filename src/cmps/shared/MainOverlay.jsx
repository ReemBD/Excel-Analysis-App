import React, { useContext } from 'react'
import { store } from 'store/store'

export const MainOverlay = ({ isOpen }) => {
    const { dispatch } = useContext(store)

    return (
        <div
            className={`main-overlay ${isOpen && 'open'}`}
            onClick={() => { dispatch({ type: 'CLOSE_OVERLAY' }) }}
        >
        </div>
    )
}
