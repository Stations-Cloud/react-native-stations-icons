import React from "react";
import { IconMapping, IStationsIcon } from "../interface";
declare const createIconsComponent: (fontName: string, json: IconMapping, font: any) => ({ name, color, size }: IStationsIcon<keyof typeof json>) => React.JSX.Element;
export default createIconsComponent;
