import * as React from "react";
import { IStationsIcon } from "../interface/IStationsIcon";
import Activity from "./Activity";
import ActivityHeart from "./ActivityHeart";
import Anchor from "./Anchor";
import Archive from "./Archive";
import Asterisk01 from "./Asterisk01";
import Asterisk02 from "./Asterisk02";
import AtSign from "./AtSign";
import BookmarkAdd from "./BookmarkAdd";
import BookmarkCheck from "./BookmarkCheck";
import BookmarkMinus from "./BookmarkMinus";
import Building01 from "./Building01";
import BookmarkX from "./BookmarkX";
import Building02 from "./Building02";
import Building03 from "./Building03";
import Building04 from "./Building04";
import Building05 from "./Building05";
import Bookmark from "./Bookmark";

const iconsGeneral = {
  activity: Activity,
  "activity-heart": ActivityHeart,
  anchor: Anchor,
  archive: Archive,
  "asterisk-01": Asterisk01,
  "asterisk-02": Asterisk02,
  "at-sign": AtSign,
  bookmark: Bookmark,
  "bookmark-add": BookmarkAdd,
  "bookmark-check": BookmarkCheck,
  "bookmark-minus": BookmarkMinus,
  "bookmark-x": BookmarkX,
  "building-01": Building01,
  "building-02": Building02,
  "building-03": Building03,
  "building-04": Building04,
  "building-05": Building05,
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
