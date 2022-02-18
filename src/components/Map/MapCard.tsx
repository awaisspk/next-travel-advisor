import {Flex} from '@components/Flex';
import {LocationIcon} from '@components/icons/location';
import {StarIcon} from '@components/icons/star';
import {Card, Spacer, Text, Tooltip} from '@nextui-org/react';
import React from 'react';

type MapCardProps = {
  imageUrl: string;
  label: string;
  rating: string;
};

export const MapCard = (props: MapCardProps) => {
  return (
    <div>
      <Tooltip placement="top" content={<Content {...props} />}>
        <LocationIcon />
      </Tooltip>
    </div>
  );
};

const getStars = (count: number) => {
  if (count < 0) return 'N/A';
  return Array(count)
    .fill(1)
    .map((_, i) => <StarIcon key={i} />);
};

const Content = ({imageUrl, label, rating}: MapCardProps) => {
  return (
    <Card cover shadow={false} css={{p: 0, bg: 'transparent'}}>
      <Card.Body css={{p: 0, minWidth: '180px'}}>
        <Card.Image
          src={imageUrl}
          height={100}
          width="100%"
          objectFit="cover"
          alt={label}
        />
      </Card.Body>
      <Spacer y={0.3} />
      <Card.Footer css={{p: 0}}>
        <Flex direction="col">
          <Flex gap="6">
            <Text b size={12}>
              Name :{' '}
            </Text>
            <Text size={12}>{label}</Text>
          </Flex>
          <Flex gap="4">
            <Text b size={12}>
              Rating :{' '}
            </Text>
            <Text size={12}>{rating ? getStars(parseInt(rating)) : 'N/A'}</Text>
          </Flex>
        </Flex>
      </Card.Footer>
    </Card>
  );
};
