import {useTheme, styled} from '@nextui-org/react';

const Svg = styled('svg', {});

export const MenuIcon = () => {
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
      <path d="M20 14H4M20 6H4M14 10H4M14 18H4" />
    </Svg>
  );
};
