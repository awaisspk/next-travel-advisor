import {Box} from '@components/Box';
import {Flex} from '@components/Flex';
import {PlaceDetails} from '@components/PlaceDetails';
import {Select} from '@components/Select';
import {Card, Container, Loading, Spacer, Text} from '@nextui-org/react';
import React, {createRef, useEffect, useState} from 'react';

const items = [
  {value: 'restaurants', name: 'Restaurants'},
  {value: 'hotels', name: 'Hotels'},
  {value: 'attractions', name: 'Attractions'},
];

const ratingItems = [
  {value: '0', name: 'All'},
  {value: '3', name: 'Above 3.0'},
  {value: '4', name: 'Above 4.0'},
  {value: '4.5', name: 'Above 4.5'},
];

type ListProps = {
  places: any[];
  childClicked: any;
  isLoading: boolean;
  isError: boolean;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setRating: React.Dispatch<React.SetStateAction<string>>;
};

export const List = ({
  places,
  childClicked,
  setType,
  setRating,
  isLoading,
  isError,
}: ListProps) => {
  const [placeRef, setPlaceRef] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill(1)
      .map((_, i) => placeRef[i] || createRef());
    setPlaceRef(refs);
    console.log('loopppppp....');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);

  return (
    <Container
      fluid
      gap={0}
      as="section"
      css={{
        transition: '300ms all',
        px: '20px',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <Spacer y={1} />
      <Box>
        <Text
          h2
          size="1.5rem"
          css={{textGradient: '45deg, $purple500 -20%, $pink500 100%'}}
        >
          Restaurants, Hotels & Attractions around you
        </Text>
      </Box>
      <Spacer y={0.5} />
      <Box
        css={{
          display: 'flex',
          width: 'min(400px, 100%)',
          gap: '10px',
          '@xsMax': {flexDirection: 'column'},
        }}
      >
        <Select label="Type" items={items} handleSelectedItemChange={setType} />
        <Select
          label="Rating"
          items={ratingItems}
          handleSelectedItemChange={setRating}
        />
      </Box>
      <Spacer y={1} />
      <Box>
        {isLoading ? (
          <Flex justify="center" css={{mt: '50px'}}>
            <Loading size="xl" />
          </Flex>
        ) : isError ? (
          <Card color="error">Something went wrong</Card>
        ) : (
          <Flex direction="col" gap="6">
            {places?.map((place, i) => (
              <PlaceDetails
                key={place.longitude + i}
                place={place}
                selected={Number(childClicked) === i}
                refProp={placeRef[i]}
              />
            ))}
          </Flex>
        )}
      </Box>
    </Container>
  );
};
