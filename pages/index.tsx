import {Box} from '@components/Box';
import {Header} from '@components/Header';
import {List} from '@components/List';
import {Map} from '@components/Map';
import type {NextPage} from 'next';
import {useState} from 'react';
import {useMedia} from 'react-use';

const Home: NextPage = () => {
  const isMd = useMedia('(max-width : 960px)', true);
  const [isHideDetails, setIsHideDetail] = useState(false);

  return (
    <Box>
      <Header isMobile={isMd} hideDetails={setIsHideDetail} />
      <Box
        css={{
          height: 'calc(100vh - 70px)',
          bg: '$secondary',
          display: 'grid',
          gridTemplateColumns: '400px 1fr',
          alignContent: 'stretch',
          '@smMax': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        <Box
          css={{
            background: 'Field',
            height: 'calc(100vh - 70px)',
            '@smMax': {
              width: 'min(400px, 100% - 50px)',
              position: 'absolute',
              top: '70px',
              left: hideDetails ? '-400px' : '0',
              zIndex: '$4',
              transition: '500ms all',
              overflowY: 'scroll',
            },
          }}
        >
          <List
            places={data}
            childClicked={childClicked}
            setType={setType}
            setRating={setRating}
            isLoading={isFetching}
            isError={isError}
          />
        </Box>
        <Box>
          <Map />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
