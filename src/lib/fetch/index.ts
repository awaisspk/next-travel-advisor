import {Bounds} from '@src/types';
import axios from 'axios';

export const getPlaceDetails = async ({
  type,
  ne,
  sw,
}: Bounds & {type: string}) => {
  try {
    const {
      data: {data},
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': `${process.env.NEXT_PUBLIC_TRAVEL_API}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
