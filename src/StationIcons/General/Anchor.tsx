import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const Anchor = (props: IStationsIcon) => (
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
      d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v14m0 0A10 10 0 0 1 2 12h3m7 10a10 10 0 0 0 10-10h-3"
    />
  </Svg>
);
export default Anchor;
