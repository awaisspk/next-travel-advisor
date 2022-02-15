import {Flex} from '@components/Flex';
import {SearchIcon} from '@components/icons/search';
import {ThemeSwitch} from '@components/ThemeSwitch';
import {Grid, Input, styled} from '@nextui-org/react';
// import {Autocomplete} from '@react-google-maps/api';

const StyledHeader = styled('header', {
  position: 'sticky',
  top: '0%',
  width: 'min(1200px, 100%)',
  margin: 'auto',
  h: '70px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  px: '20px',
});

export const Header = () => {
  return (
    <StyledHeader>
      <Grid.Container alignItems="center" justify="center" css={{h: '100%'}}>
        <Flex gap="3" css={{width: 'min(600px,100%)'}}>
          <Input
            placeholder="Search..."
            fullWidth
            size="lg"
            bordered
            color="primary"
            contentRight={<SearchIcon />}
          />
          {/* <Autocomplete> */}
          {/* </Autocomplete> */}
        </Flex>
      </Grid.Container>
      <ThemeSwitch />
    </StyledHeader>
  );
};
