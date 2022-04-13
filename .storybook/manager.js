// .storybook/manager.js

import { addons } from '@storybook/addons';
import yourTheme from './YourTheme';

addons.setConfig({
  theme: yourTheme,
});

import '../src/styles/global.css';
import '../src/styles/storybook-ui.css';