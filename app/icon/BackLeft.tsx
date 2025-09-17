import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const BackLeftIcon = ({ ...props }: SvgProps) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
    <Path
      d="M20.4111 25.7489C20.0763 26.0837 19.5336 26.0837 19.1989 25.7489L7.44995 14L19.1989 2.25105C19.5336 1.91631 20.0763 1.91632 20.4111 2.25105C20.7458 2.58579 20.7458 3.1285 20.4111 3.46323L9.87432 14L20.4111 24.5368C20.7458 24.8715 20.7458 25.4142 20.4111 25.7489Z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#E54116"
    />
  </Svg>
);
