import * as React from "react";
import { IStationsIcon } from "../interface/IStationsIcon";
declare const iconsUser: {
    readonly "face-content": (props: IStationsIcon) => React.JSX.Element;
    readonly "face-frown": (props: IStationsIcon) => React.JSX.Element;
};
type IconIconsName = keyof typeof iconsUser;
export default function User(props: IStationsIcon<IconIconsName>): React.JSX.Element | null;
export {};
