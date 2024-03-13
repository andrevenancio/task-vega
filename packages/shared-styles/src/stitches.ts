import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, theme, createTheme, getCssText, config } = createStitches({
  theme: {
    fonts: {
      headers: "'Hammersmith One', sans-serif",
      body: "'Lato', sans-serif",
    },
    space: {
      32: '32px',
      16: '16px',
      8: '8px',
      4: '4px',
    },
    transitions: {
      fast: 'all 0.125s linear',
      medium: 'all 0.25s linear',
      slow: 'all 0.3s linear',
    },
    colors: {
      // brand colors
      white: '#ffffff',
      black: '#000000',
      grey: '#e6e6e6',
      data: '#11EEBB',
      consultancy: '#5B079B',
      delivery: '#FFD200',

      // generic colors
      red: '#ff0000',
      green: '#11EEBB',
    },
    radii: {
      16: '16px',
      8: '6px',
      4: '4px',
    },
    elevations: {
      panel: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      sidebarshadow: '5px 0 10px #c0c0c050',
    },
  },
  media: {
    tablet: '(min-width: 640px)',
    desktop: '(min-width: 1280px)',
    large: '(min-width: 1640px)',
  },
});

export const DarkTheme = {
  // ----------
  // COLORS
  // ----------
  // background
  $colors$backgroundPrimary: '#101010',
  // panel
  $colors$panelBackground: '#1e1e1e',
  // border
  $colors$border: 'rgba(255, 255, 255, 0.1)',
  // text
  $colors$textPrimary: '#ededed',
  $colors$textSecondary: '#8C8C8D',
  // button
  $colors$buttonBackground: '#ffffff',
  $colors$buttonColor: '#000000',
  // switch
  $colors$switchBackground: '#282828',
  $colors$switchFocus: '#ffffff50',

  // ----------
  // ELEVATIONS
  // ----------
  $elevations$sidebarshadow: '5px 0 10px #00000050',
};

export const LightTheme = {
  // ----------
  // COLORS
  // ----------
  // background
  $colors$backgroundPrimary: '#f7f7f7',
  // panel
  $colors$panelBackground: '#ffffff',
  // border
  $colors$border: '#e6ebf1',
  // text
  $colors$textPrimary: '#000000',
  $colors$textSecondary: '#666666',
  // button
  $colors$buttonBackground: '#000000',
  $colors$buttonColor: '#ffffff',
  // switch
  $colors$switchBackground: '#e5e5e5',
  $colors$switchFocus: '#00000050',

  // ----------
  // ELEVATIONS
  // ----------
  $elevations$sidebarshadow: '5px 0 10px #c0c0c050',
};
