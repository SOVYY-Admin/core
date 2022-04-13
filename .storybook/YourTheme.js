// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import logo from '../src/logo.svg';

export default create({
  base: 'light',

  colorPrimary: 'blue',
  colorSecondary: 'blue',

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
  barSelectedColor: 'blue',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 8,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://design.sovyy.com',
  brandImage: logo,
});