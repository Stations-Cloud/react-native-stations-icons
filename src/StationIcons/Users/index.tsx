import * as React from "react";

import { IStationsIcon } from "../interface/IStationsIcon";
import FaceContent from "./FaceContent";
import FaceFrown from "./FaceFrown";

const iconsUser = {
  "face-content": FaceContent,
  "face-frown": FaceFrown,
} as const;

type IconIconsName = keyof typeof iconsUser;

export default function User(props: IStationsIcon<IconIconsName>) {
  const { name, size, color, ...svgProps } = props;
  const User = iconsUser[name];

  if (!User) {
    return null;
  }
  return (
    <User
      name={name}
      size={size}
      width={size}
      color={color}
      height={size}
      {...svgProps}
    />
  );
}
