import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const BackRightIcon = ({ ...props }: SvgProps) => (
  <Svg width="11" height="13" viewBox="0 0 11 13" fill="none" {...props}>
    <Path
      d="M1.64296 12.2077C1.85539 12.3751 2.19981 12.3751 2.41223 12.2077L9.8683 6.33325L2.41223 0.458776C2.1998 0.291408 1.85539 0.291409 1.64296 0.458776C1.43053 0.626144 1.43053 0.8975 1.64296 1.06487L8.32976 6.33325L1.64296 11.6016C1.43054 11.769 1.43054 12.0404 1.64296 12.2077Z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#E54116"
    />
  </Svg>
);
