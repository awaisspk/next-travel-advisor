import {MenuIcon} from '@components/icons/menu';
import {SearchIcon} from '@components/icons/search';
import {ThemeSwitch} from '@components/ThemeSwitch';
import {Button, Grid, Input, styled, css, Text} from '@nextui-org/react';
import {Coords} from 'google-map-react';
import {Dispatch, SetStateAction, useState} from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {Box} from '@components/Box';

const StyledHeader = styled('header', {
  position: 'sticky',
  top: '0%',
  width: 'min(1300px, 100%)',
  margin: 'auto',
  h: '70px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  px: '20px',
  '@xsMax': {
    px: '10px',
  },
});

const autocompleteCls = css({
  width: '100%',
});

type HeaderProps = {
  isMobile: boolean;
  hideDetails: Dispatch<SetStateAction<boolean>>;
  setCoordinates: Dispatch<SetStateAction<Coords>>;
};

export const Header = ({
  isMobile,
  hideDetails,
  setCoordinates,
}: HeaderProps) => {
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autoC: google.maps.places.Autocomplete) =>
    setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete?.getPlace().geometry?.location?.lat();
    const lng = autocomplete?.getPlace().geometry?.location?.lng();
    if (lat && lng) {
      setCoordinates({lat, lng});
    }
  };

  return (
    <StyledHeader>
      {isMobile ? (
        <Button
          auto
          icon={<MenuIcon />}
          light
          ripple
          onClick={() => hideDetails((state) => !state)}
          css={{padding: '$1'}}
        />
      ) : (
        <Text
          h2
          size="1.5rem"
          css={{
            textGradient: '45deg, $purple500 -20%, $pink500 100%',
            userSelect: 'none',
            width: '180px',
          }}
        >
          Travel advisor
        </Text>
      )}
      <Grid.Container alignItems="center" justify="center" css={{h: '100%'}}>
        <Box css={{width: 'min(600px,100%)', position: 'relative'}}>
          <Autocomplete
            className={autocompleteCls()}
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
          >
            <Input
              placeholder="Search..."
              fullWidth
              size="lg"
              bordered
              color="secondary"
            />
          </Autocomplete>
          <Box
            css={{
              position: 'absolute',
              top: '10px',
              right: 10,
              paddingLeft: '10px',
            }}
          >
            <SearchIcon />
          </Box>
        </Box>
      </Grid.Container>
      <ThemeSwitch />
    </StyledHeader>
  );
};
