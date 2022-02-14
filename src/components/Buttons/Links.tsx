import {styled} from '@stitches';

export const Link = styled('a', {
  color: '$white',
  fontFamily: '$primary',
  fontSize: '$1',
  px: '$2',
  py: '$2',
  borderRadius: '$md',
  transition: '300ms',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$blue2',
  },
});
