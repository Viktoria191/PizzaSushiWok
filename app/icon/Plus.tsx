import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const PlusIcon = ({ ...props }: SvgProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <Path
      d="M9 9H6M9 6V9V6ZM9 9V12V9ZM9 9H12H9Z"
      stroke="#222222"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
      stroke="#222222"
      stroke-width="1.5"
    />
  </Svg>
);
