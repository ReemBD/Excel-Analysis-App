import React from "react";
import styled from "styled-components";
import { BtnClose } from "cmps/shared/BtnClose";
import { gradient1 } from "cmps/shared/styles/mixin";

export const PopoverHeader = ({ children, onClose, left, ...restOfProps }) => {
  return (
    <S.PopoverHeader left={left} {...restOfProps}>
      <h1>{children}</h1>
      <BtnClose onClick={onClose} />
    </S.PopoverHeader>
  );
};

const S = {};
S.PopoverHeader = styled.div`
  background: ${gradient1};
  background-size: 100% 1px;
  text-align: center;

  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
  left: ${({ left }) => left+'px'};
  right: 0;
  position: fixed;
  width: 100%;
  button {
    position: absolute;
    ${({ small }) =>
      small ? "right: 13px; top: 13px;" : "right: 15px; top: 15px;"}
  }

  h1,
  button {
    font-size: ${(props) => (props.small ? "0.8rem" : "1.5em")};
  }
`;
