import '../src/styles/global.css'

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    classTarget: 'html',
    stylePreview: true,
    // Override the default dark theme
    dark: {
      base: 'dark ',

      colorPrimary: 'white',
      colorSecondary: 'white',
    
      // UI 
      appBg: '#0d0d0d',
      appContentBg: '#191919',
      appBorderColor: '#333333',
      appBorderRadius: 8,
    
      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',
    
      // Text colors
      textColor: 'white',
      textInverseColor: 'black',
    
      // Toolbar default and active colors
      barTextColor: 'white',
      barSelectedColor: 'white',
      barBg: '#191919',
    
      // Form colors
      inputBg: '#333333',
      inputBorder: 'none',
      inputTextColor: 'white',
      inputBorderRadius: 8,
    
      brandTitle: 'SOVYY Design System',
      brandUrl: 'https://design.sovyy.com',
      brandImage: 'https://sovyy.com/content/uploads/logo_Darkmode_e9cd9eb8ae.svg',
    },
    // Override the default light theme
    light: {
      base: 'light',

      colorPrimary: 'black',
      colorSecondary: 'black',
    
      // UI
      appBg: 'ghostwhite',
      appContentBg: 'white',
      appBorderColor: '#dfdfe6',
      appBorderRadius: 8,
    
      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',
    
      // Text colors
      textColor: 'black',
      textInverseColor: 'white',
    
      // Toolbar default and active colors
      barTextColor: 'black',
      barSelectedColor: 'black',
      barBg: 'white',
    
      // Form colors
      inputBg: '#e6e6e6',
      inputBorder: 'none',
      inputTextColor: 'black',
      inputBorderRadius: 8,
    
      brandTitle: 'SOVYY Design System',
      brandUrl: 'https://design.sovyy.com',
      brandImage: 'https://sovyy.com/content/uploads/logo_42e0459919.svg?54695.199999999255',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


// Storybook image config fix
import * as nextImage from 'next/image';
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});
