import {styled, useTheme} from '@nextui-org/react';

const Svg = styled('svg', {});

export const ChevronDown = () => {
  const {isDark} = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={36}
      height={36}
      fill="none"
      css={{stroke: isDark ? '$gray500' : '$gray600'}}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 10 5 5 5-5" />
    </Svg>
  );
};
