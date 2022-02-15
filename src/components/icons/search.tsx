import {Box} from '@components/Box';
import {SVGProps} from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <Box css={{'& svg': {stroke: '$gray500', size: 20}}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={36}
      height={36}
      fill="none"
      // stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={11} cy={11} r={9} />
      <path d="M17.5 17.5 22 22" />
    </svg>
  </Box>
);
