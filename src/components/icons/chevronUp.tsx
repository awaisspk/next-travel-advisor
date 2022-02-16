import {styled, useTheme} from '@nextui-org/react';

const Svg = styled('svg', {});

export const ChevronUp = () => {
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
      <path d="m17 14-5-5-5 5" />
    </Svg>
  );
};
