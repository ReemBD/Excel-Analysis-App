import React from 'react'
import { Button } from './Button'

export const ButtonAction = ({ onClick, icon: Icon, className, ...restOfProps }) => {
    return (
        <Button onClick={onClick}>
             <Icon
                {...restOfProps}
                className={`btn-action ${className}`}
            />
        </Button>
    )
}
