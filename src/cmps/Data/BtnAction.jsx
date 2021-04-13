import React from 'react'

export default ({ onClick, icon: Icon, className, ...restOfProps }) => {

    const btnClearStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'inherit'
    }
    return (
        <button
            onClick={onClick}
            style={btnClearStyle}
        >
            <Icon
                {...restOfProps}
                className={`btn-action ${className}`}
            />
        </button>
    )
}
