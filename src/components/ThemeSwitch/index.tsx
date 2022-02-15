import {useTheme as useNextTheme} from 'next-themes';
import {Switch, useTheme} from '@nextui-org/react';
import {SunIcon} from '@components/icons/sun';
import {MoonIcon} from '@components/icons/moon';
import {Box} from '@components/Box';
import {useMedia} from 'react-use';

export const ThemeSwitch = () => {
  const {setTheme} = useNextTheme();
  const {isDark} = useTheme();
  const isMobile = useMedia('(max-width: 400px)');

  return (
    <Box>
      <Switch
        size={isMobile ? 'md' : 'xl'}
        color="primary"
        bordered
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<SunIcon />}
        iconOff={<MoonIcon />}
      />
    </Box>
  );
};
