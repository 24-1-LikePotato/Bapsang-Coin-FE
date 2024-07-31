import React from 'react';
import { createGlobalStyle } from 'styled-components';

const ImportGongGothicBoldFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'GongGothicBold';
    src: url('/assets/fonts/GongGothicBoldOTF.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default function GongGothicBoldFontStyle() {
  return <ImportGongGothicBoldFontStyle></ImportGongGothicBoldFontStyle>;
}
