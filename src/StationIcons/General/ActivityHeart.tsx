import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IStationsIcon } from "../interface/IStationsIcon";

const ActivityHeart = (props: IStationsIcon) => (
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
      d="M12 18s1.5 2 4 2 4-2 4-2m1-4.76c-.395.485-.935.76-1.5.76s-1.09-.275-1.5-.76m-4 0c-.395.485-.935.76-1.5.76s-1.09-.275-1.5-.76M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Z"
    />
  </Svg>
);
export default ActivityHeart;
