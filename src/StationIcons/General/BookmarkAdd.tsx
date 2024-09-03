import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const BookmarkAdd = (props: IStationsIcon) => (
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
      d="M8 11V5M5 8h6m4 11V5.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C12.72 1 11.88 1 10.2 1H5.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C1 3.28 1 4.12 1 5.8V19l7-4 7 4Z"
    />
  </Svg>
);
export default BookmarkAdd;
