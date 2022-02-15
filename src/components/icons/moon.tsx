import {SVGProps} from 'react';

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={36}
    height={36}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 16a9 9 0 0 1-8.09-12.93 9 9 0 1 0 9.18 12.86A9.81 9.81 0 0 1 19 16Z" />
  </svg>
);
