import {Box} from '@components/Box';
import GoogleMapReact, {Bounds, Coords} from 'google-map-react';
import {Dispatch, SetStateAction} from 'react';
import {MapCard} from './MapCard';

type MapProps = {
  setCoordinates: Dispatch<SetStateAction<Coords>>;
  setBounds: Dispatch<SetStateAction<Omit<Bounds, 'nw' | 'se'> | null>>;
  coordinates: Coords;
  places: any;
  handleChildClick: any;
};

export const Map = ({
  setBounds,
  setCoordinates,
  coordinates,
  places,
  handleChildClick,
}: MapProps) => {
  return (
    <Box css={{width: '100%', height: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{fullscreenControl: false}}
        onChildClick={(child) => {
          handleChildClick(child);
        }}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
      >
        {places?.map((place: any, i: number) => {
          return (
            <div
              // @ts-ignore
              lat={Number(place.latitude) || 0}
              lng={Number(place.longitude) || 0}
              key={i}
            >
              <MapCard
                imageUrl={
                  place.photo
                    ? place.photo.images.large.url
                    : '/images/restaurant.jpg'
                }
                label={place.name}
                rating={place.rating}
              />
            </div>
          );
        })}
      </GoogleMapReact>
    </Box>
  );
};
