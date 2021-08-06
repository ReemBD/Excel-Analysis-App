import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
const StyledBtnClose = styled.button`
    
        outline: none !important;
        border: none !important;
        background-color: transparent;
        padding: 0;
        margin: 0;
        cursor: pointer;
`

export const BtnClose = ({ ...restOfProps }) => {

    return (
        <StyledBtnClose {...restOfProps}>
            <AiOutlineClose />
        </StyledBtnClose>
    )
}
