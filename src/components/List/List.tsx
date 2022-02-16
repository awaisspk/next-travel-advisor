import {Box} from '@components/Box';
import {Select} from '@components/Select';
import {Container, Spacer, Text} from '@nextui-org/react';
import React, {useEffect, useState} from 'react';

const items = [
  {value: 'restaurants', name: 'Restaurants'},
  {value: 'hotels', name: 'Hotels'},
  {value: 'parks', name: 'Parks'},
];

const ratingItems = [
  {value: '0', name: 'All'},
  {value: '3', name: 'Above 3.0'},
  {value: '4', name: 'Above 4.0'},
  {value: '4.5', name: 'Above 4.5'},
];

export const List = () => {
  const [type, setType] = useState('Restaurants');
  const [rating, setRating] = useState('0');

  useEffect(() => {
    console.log(type, rating);
  }, [type, rating]);

  return (
    <Container
      fluid
      gap={0}
      as="section"
      css={{
        transition: '300ms all',
        px: '20px',
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
        <Select
          label="Type"
          items={items}
          // selectedItem={type}
          handleSelectedItemChange={setType}
        />
        <Select
          label="Rating"
          items={ratingItems}
          // selectedItem={rating}
          handleSelectedItemChange={setRating}
        />
      </Box>
    </Container>
  );
};
