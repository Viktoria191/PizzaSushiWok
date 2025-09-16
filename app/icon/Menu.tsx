import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const MenuIcon = ({ ...props }: SvgProps) => (
  <Svg width='34' height='40' viewBox='0 0 34 40' fill='none' {...props}>
    <Path
      d='M5 12.5H28M5 20H28M5 27.5H28'
      stroke='#45413C'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
