import {Card, Col, Link, Row, Spacer, Text} from '@nextui-org/react';
import {motion} from 'framer-motion';
import React, {useEffect} from 'react';
import {Chip} from '@components/Chip';
import {darkTheme} from 'styles/next-theme';
import {Flex} from '@components/Flex';
import {Box} from '@components/Box';

type PlaceDetailsProps = {
  place: any;
  selected: boolean;
  refProp: any;
};

export const PlaceDetails = ({place, selected, refProp}: PlaceDetailsProps) => {
  useEffect(() => {
    if (selected) {
      refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, [selected, refProp]);

  return (
    <Card cover css={{p: 0}} ref={refProp}>
      <Card.Body>
        <Card.Image
          src={
            place.photo
              ? place.photo.images.large.url
              : '/images/restaurant.jpg'
          }
          height={400}
          width="100%"
          alt={place.name}
        />
      </Card.Body>
      <Card.Footer
        as={motion.div}
        whileInView={{
          height: '90%',
          paddingTop: '30px',
          gap: '0',
          transition: {damping: 0},
        }}
        blur
        css={{
          position: 'absolute',
          bgBlur: '#dbdbdb',
          borderTop: '$borderWeights$light solid $gray700',
          flexDirection: 'column',
          height: '120px',
          overflowY: 'hidden',
          bottom: 0,
          gap: '30px',
          zIndex: 1,
          [`.${darkTheme} &`]: {
            bgBlur: '#0f1114',
          },
        }}
      >
        <Box css={{width: '100%'}}>
          <Row fluid>
            <Text h1 size={18}>
              {place.name}
            </Text>
          </Row>
          <Spacer y={0.3} />
          <Row fluid align="flex-start">
            <Col>
              <Row justify="space-between">
                <Col span={6}>
                  <Text b size={12}>
                    Open status:{' '}
                  </Text>
                </Col>
                <Text size={12}>
                  {place.is_closed ? 'Closed Now' : 'Open Now'}
                </Text>
              </Row>
              <Row justify="space-between">
                <Col span={6}>
                  <Text b size={12}>
                    Ranking:{' '}
                  </Text>
                </Col>
                <Text size={12}>
                  {place.ranking_position && place.ranking_denominator
                    ? place.ranking_position + ' / ' + place.ranking_denominator
                    : 'N/A'}
                </Text>
              </Row>
            </Col>
            <Col offset={0} span={5} css={{ml: '20px'}}>
              <Row justify="space-between">
                <Text b size={12}>
                  Price:{' '}
                </Text>
                <Text size={12}>
                  {place.price_level ? place.price_level : 'N/A'}
                </Text>
              </Row>
              <Row justify="space-between">
                <Text b size={12}>
                  Rating:{' '}
                </Text>
                <Text size={12}>{place.rating ?? 'N/A'}</Text>
              </Row>
            </Col>
          </Row>
        </Box>
        <Box css={{width: '100%'}}>
          <Spacer y={0.5} />
          <Row justify="space-between" fluid>
            <Col>
              <Text b size={12}>
                Location:{' '}
              </Text>
            </Col>
            <Text size={12}>{place.address ? place.address : 'N/A '}</Text>
          </Row>
          <Spacer y={0.5} />
          <Row wrap="wrap">
            <Flex gap="3" wrap="wrap">
              {place?.cuisine?.map((item: any) => (
                <Chip key={item.key}>{item.name}</Chip>
              ))}
            </Flex>
          </Row>
          <Spacer y={0.5} />
          <Row fluid>
            {place.web_url && (
              <Col>
                <Link color="text" target="_blank" href={place.web_url} icon>
                  Trip advisor
                </Link>
              </Col>
            )}
            {place.website && (
              <Col>
                <Link color="text" href={place.website} target="_blank" icon>
                  Website
                </Link>
              </Col>
            )}
          </Row>
        </Box>
      </Card.Footer>
    </Card>
  );
};
