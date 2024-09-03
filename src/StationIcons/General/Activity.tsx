import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const Activity = (props: IStationsIcon) => (
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
      d="M22 12h-4l-3 9L9 3l-3 9H2"
    />
  </Svg>
);
export default Activity;
