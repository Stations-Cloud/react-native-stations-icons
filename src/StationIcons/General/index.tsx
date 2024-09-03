import * as React from "react";
import { IStationsIcon } from "../interface/IStationsIcon";
import Activity from "./Activity";
import ActivityHeart from "./ActivityHeart";
import Anchor from "./Anchor";
import Archive from "./Archive";
import Asterisk01 from "./Asterisk01";
import Asterisk02 from "./Asterisk02";
import AtSign from "./AtSign";

const iconsGeneral = {
  activity: Activity,
  "activity-heart": ActivityHeart,
  anchor: Anchor,
  archive: Archive,
  "asterisk-01": Asterisk01,
  "asterisk-02": Asterisk02,
  "at-sign": AtSign,
} as const;

type IconGeneralName = keyof typeof iconsGeneral;

export default function General(props: IStationsIcon<IconGeneralName>) {
  const { name, size, color, ...svgProps } = props;
  const General = iconsGeneral[name];

  if (!General) {
    return null;
  }

  return (
    <General
      name={name}
      size={size}
      color={color}
      width={size}
      height={size}
      {...svgProps}
    />
  );
}
