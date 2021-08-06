import { createGlobalStyle } from "styled-components";

export const Helpers = createGlobalStyle`

.grid {
    display: grid;
}

.flex {
    display: flex;
    &.space-between {
        justify-content: space-between;
    }
    &.align-center {
        align-items: center;
    }
    &.wrap {
        flex-wrap: wrap;
    }
}

.bold {
    font-family: "Open Sans Bold";
    &er {
        font-family: "Open Sans Bolder";
    }
}
/* 
@for $i from 1 through 40 {
    .mb-#{$i} {
        margin-bottom: #{$i}px;
    }
    .mt-#{$i} {
        margin-top: #{$i}px;
    }
    .mie-#{$i} {
        margin-inline-end: #{$i}px;
    }
    .mis-#{$i} {
        margin-inline-start: #{$i}px;
    }
    .p-#{$i} {
        padding: #{$i}px;
    }
    .pb-#{$i} {
        padding-bottom: #{$i}px;
    }
    .pt-#{$i} {
        padding-top: #{$i}px;
    }
    .pie-#{$i} {
        padding-inline-end: #{$i}px;
    }
    .pis-#{$i} {
        padding-inline-start: #{$i}px;
    }

    .border-radius-#{$i} {
        border-radius: #{$i}px;
    }
}

@for $i from 1 through 10 {
    .fg-#{$i} {
        flex-grow: #{$i};
    }
} */

.clear {
    &-btn {
        border: none;
        outline: none;
        background-color: transparent;
    }
    &-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
}

.cursor-pointer {
    cursor: pointer;
}

.primary-btn-hover {
    &:hover {
        color: darken($clr2, 20);
        background-color: #cec3ab;
        border-radius: 999px;
    }
}

.default-overlay {
    position: absolute;
    background: linear-gradient(
        0deg,
        rgba(252, 252, 252, 0.5130427170868348) 59%,
        rgba(32, 32, 32, 0.08727240896358546) 87%
    );
}

.display-none {
    display: none;
}

`