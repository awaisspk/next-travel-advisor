import {Box} from '@components/Box';
import React, {ReactNode} from 'react';
import {darkTheme} from 'styles/next-theme';

type ChipProps = {
  children: ReactNode;
};
export const Chip = ({children}: ChipProps) => {
  return (
    <>
      <Box
        css={{
          bgBlur: '#dbdbdb',
          borderRadius: '$pill',
          padding: '$2 $6',
          [`.${darkTheme} &`]: {
            bgBlur: '#0f1114',
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
