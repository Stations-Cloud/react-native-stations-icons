import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const Asterisk02 = (props: IStationsIcon) => (
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
      d="M12 4v16m6-14L6 18m14-6H4m14 6L6 6"
    />
  </Svg>
);
export default Asterisk02;
