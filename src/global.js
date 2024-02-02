import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
      background-image: url("/desktop--dark-mode@3x.png");

      color: var(--text-color-dark-mode);
      top: 56px;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        min-height: 100vh;
    }


:root {

/* fonts */
--text-md: Inter;

/* font sizes */
--text-md-size: 16px;

/* Colors */
--stroke-color-dark-mode: rgba(255, 255, 255, 0.5);
--surface-color-dark-mode: rgba(255, 255, 255, 0.1);
--text-color-dark-mode: #fff;

/* Gaps */
--gap-base: 16px;

/* Paddings */
--padding-base: 16px;
--padding-5xl: 24px;

/* Border radiuses */
--br-5xs: 8px;

}
`;
