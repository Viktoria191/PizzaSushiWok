import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const NoFavoriteIcon = ({ ...props }: SvgProps) => (
  <Svg width='29' height='29' viewBox='0 0 29 29' fill='none' {...props}>
    <Path
      d='M20.3186 4.5C18.0186 4.5 15.1436 7.44118 15.1436 7.44118C15.1436 7.44118 12.2686 4.5 9.96862 4.5C6.42662 4.5 3.64362 6.74706 3.64362 10.3824C3.64362 14.8176 7.55362 18.4529 13.4761 23.9471L15.1436 25.5L16.8111 23.9471C22.7336 18.4529 26.6436 14.8176 26.6436 10.3824C26.6436 6.74706 23.7686 4.5 20.3186 4.5Z'
      stroke='#E54116'
    />
  </Svg>
);
