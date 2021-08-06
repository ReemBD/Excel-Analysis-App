import { createGlobalStyle } from "styled-components";

export const Layouts = createGlobalStyle`
.main-layout {
    @media screen and (min-width: 1100px) {
        max-width: 1300px;
        margin: 0 auto;
    }
}

`;
