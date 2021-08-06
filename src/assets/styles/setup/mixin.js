import { css } from "styled-components";

export const mixin = {};

mixin.header = css`
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
`;

mixin.flexColumnCentered = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

mixin.borderBottom = css`
  background: $gradient1;
  background-size: 100% 2px;
`;
