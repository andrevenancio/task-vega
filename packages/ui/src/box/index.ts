import { styled } from '@vega/shared-styles';

export const Box = styled('div', {
  display: 'flex',

  variants: {
    vertical: {
      true: {
        alignItems: 'center',
      },
    },

    horizontal: {
      true: {
        justifyContent: 'center',
      },
    },

    mobile: {
      true: {
        '@tablet': {
          display: 'none',
        },
      },
    },

    tablet: {
      true: {
        display: 'none',
        width: '100%',

        '@tablet': {
          display: 'flex',
        },
      },
    },

    desktop: {
      true: {
        display: 'none',
        width: '100%',

        '@desktop': {
          display: 'flex',
        },
      },
    },
  },
});

Box.displayName = 'Box';
