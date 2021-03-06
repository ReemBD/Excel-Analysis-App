import { createGlobalStyle } from "styled-components";

export const Base = createGlobalStyle`
/* @import "../setup/variables"; */

* {
    box-sizing: border-box;
}

body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

img {
    width: 100%;
    height: 100%;
}

.main-overlay {
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.705);

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    /* z-index: $overlayZ; */
}

/* DEFAULT ELEMENTS */
.default {
    &-input {
        border: none;
        // border-bottom: 1px solid $clr3;
        outline: none;
        padding: 10px;
        // background-color: inherit;
        /* background: $gradient1; */
        @include border-bottom;
    }

    &-select {
        width: 300px;
        border: none;
        outline: none;
        // border-bottom: 1px solid $clr4;
        cursor: pointer;
        padding: 10px;
        // background-color: inherit;
        @include border-bottom;
        // background: $gradient1;

        &:focus {
            background-color: $clr1;
        }
    }
}
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: rgb(190, 190, 190);
}

/* Handle */
::-webkit-scrollbar-thumb {
    // background: #888;
    background: $gradient1;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

`
