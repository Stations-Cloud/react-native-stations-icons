import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const AtSign = (props: IStationsIcon) => (
  <Svg
    {...props}
    viewBox="0 0 32 32"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
  >
    <Path
      stroke={props.color || "#616161"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </Svg>
);
export default AtSign;
