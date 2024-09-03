import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const Asterisk01 = (props: IStationsIcon) => (
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
      d="M12 2v20m7.071-17.071L4.93 19.07M22 12H2m17.071 7.071L4.93 4.93"
    />
  </Svg>
);
export default Asterisk01;
