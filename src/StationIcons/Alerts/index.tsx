import * as React from "react";
import { IStationsIcon } from "../interface/IStationsIcon";
import AlertCircle from "./AlertCircle";
import AlertHexagon from "./AlertHexagon";

const iconsAlert = {
  "alert-circle": AlertCircle,
  "alert-hexagon": AlertHexagon,
} as const;

type IconAlertName = keyof typeof iconsAlert;

export default function Alert(props: IStationsIcon<IconAlertName>) {
  const { name, size, color, ...svgProps } = props;
  const Alert = iconsAlert[name];

  if (!Alert) {
    return null;
  }

  return (
    <Alert
      name={name}
      size={size}
      color={color}
      width={size}
      height={size}
      {...svgProps}
    />
  );
}
