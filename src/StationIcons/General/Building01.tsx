import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const Building01 = (props: IStationsIcon) => (
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
      d="M13 19v-5.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.24 12 11.96 12 11.4 12H8.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C7 12.76 7 13.04 7 13.6V19m10 0V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.48 1 14.92 1 13.8 1H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 2.52 3 3.08 3 4.2V19m16 0H1M7.5 6h.01m4.99 0h.01M8 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </Svg>
);
export default Building01;
