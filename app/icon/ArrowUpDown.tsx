import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ArrowUpDown = ({ ...props }: SvgProps) => (
  <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" {...props}>
    <Path
      d="M4.66667 2V14M4.66667 2L7.33333 4.66667M4.66667 2L2 4.66667M12.6667 14V2M12.6667 14L15.3333 11.3333M12.6667 14L10 11.3333"
      stroke="#E54116"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
