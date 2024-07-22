import React from 'react';
import { createGlobalStyle } from 'styled-components';

const ImportGongGothicFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'GongGothic';
    src: url('/assets/fonts/GongGothicOTF.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default function GongGothicFontStyle() {
  return <ImportGongGothicFontStyle></ImportGongGothicFontStyle>;
}
