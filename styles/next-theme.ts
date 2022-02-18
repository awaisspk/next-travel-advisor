import {createTheme, globalCss} from '@nextui-org/react';
export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '$purple500',
      primaryDark: '$purple500',
    },
  },
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '$purple500',
      primaryDark: '$purple500',
    },
  },
});

export const globalStyles = globalCss({
  '.pac-container': {
    all: 'none',
    boxShadow: '$md',
    borderRadius: '$sm',
    overflow: 'hidden',
    outline: 'none',
    background: 'Field',
  },

  '.pac-item': {
    padding: '$4 $8',

    '& *': {
      color: '$gray900 !important',
    },

    [`.${darkTheme} & *`]: {
      color: '$gray100 !important',
    },

    '&:hover': {
      background: '$gray100 !important',
    },
  },

  [`.${lightTheme}  .pac-item-selected`]: {
    background: '$gray100 !important',
  },

  [`.${darkTheme} .pac-item:hover, .pac-item-selected`]: {
    background: '$gray800 !important',
  },

  '.pac-item .pac-icon': {
    marginRight: '10px',
  },
});
