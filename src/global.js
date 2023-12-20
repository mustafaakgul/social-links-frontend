import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
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
