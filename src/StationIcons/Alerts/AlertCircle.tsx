import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const AlertCircle = (props: IStationsIcon) => (
  <Svg
    {...props}
    width={props.width || 24}
    viewBox="0 0 32 32"
    height={props.height || 24}
    fill="none"
  >
    <Path
      stroke={props.color || "#616161"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12v4m0 4h.01M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Z"
    />
  </Svg>
);
export default AlertCircle;
