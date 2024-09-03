import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const Building04 = (props: IStationsIcon) => (
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
      d="M7.2 5h5m-5 4h5m-5 4h5m3.5 6V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.18 1 13.62 1 12.5 1H6.9c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3.7 2.52 3.7 3.08 3.7 4.2V19m14 0h-16"
    />
  </Svg>
);
export default Building04;
