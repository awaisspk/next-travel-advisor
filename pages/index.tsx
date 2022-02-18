import {Box} from '@components/Box';
import {Header} from '@components/Header';
import {List} from '@components/List';
import {Map} from '@components/Map';
import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import {useMedia} from 'react-use';
import {getPlaceDetails} from '@src/lib/fetch';
import {Coords} from 'google-map-react';
import {useQuery} from 'react-query';
import {Bounds} from '@src/types';

const Home: NextPage = () => {
  const isMd = useMedia('(max-width : 960px)', true);

  const [hideDetails, setHideDetails] = useState(false);
  const [coordinates, setCoordinates] = useState<Coords>({
    lat: 31.5204,
    lng: 74.3587,
  });

  const [bounds, setBounds] = useState<Bounds | null>(null);
  const [childClicked, setChildClicked] = useState(null);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('0');
  const {data, isError, isFetching} = useQuery(
    [type, bounds?.ne.lat, bounds?.ne.lng],
    () => getPlaceDetails({ne: bounds!.ne, sw: bounds!.sw, type}),
    {
      enabled: false,
      retry: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 6 * 1000 * 60,
      placeholderData: [],
      select: (data) =>
        data.filter((place: any) => place.rating > rating && place.name !== ''),
    }
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) =>
      setCoordinates({lat: coords.latitude, lng: coords.longitude})
    );
  }, []);

  return (
    <Box>
      <Header
        setCoordinates={setCoordinates}
        isMobile={isMd}
        hideDetails={setHideDetails}
      />
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
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={data}
            handleChildClick={setChildClicked}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
