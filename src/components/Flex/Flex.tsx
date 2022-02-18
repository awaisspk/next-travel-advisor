import {styled} from '@nextui-org/react';
import {gap} from './gap';

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      col: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      colReverse: {
        flexDirection: 'column-reverse',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      stretch: {
        justifyContent: 'stretch',
      },
      spaceBtw: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
    },

    alignItems: {
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
      center: {
        alignItems: 'center',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },

    gap,

    center: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});
