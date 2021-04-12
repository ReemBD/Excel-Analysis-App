import React, { useState } from 'react'

const DEFAULT_STATE = {
    txt: ''
}

export const DataCorrModal = React.forwardRef(({ isOpen }, ref) => {

    const [param, setParam] = useState(DEFAULT_STATE)

    function handleChange({ target: { name, value } }) {
        setParam({ ...param, [name]: value })
    }

    return (
        <div ref={ref}
            className={`data-corr-modal ${isOpen && 'open'}`}
        >
            <input
                type="text"
                className="default-input"
                value={param.txt}
                onChange={handleChange}
            />
            <h3>Hello from data corr modal</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolorem veniam cupiditate labore at hic officia veritatis, placeat corporis totam!</p>
        </div >
    )
})

/*  */