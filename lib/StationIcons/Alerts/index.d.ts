import * as React from "react";
import { IStationsIcon } from "../interface/IStationsIcon";
declare const iconsAlert: {
    readonly "alert-circle": (props: IStationsIcon) => React.JSX.Element;
    readonly "alert-hexagon": (props: import("react-native-svg").SvgProps) => React.JSX.Element;
};
type IconAlertName = keyof typeof iconsAlert;
export default function Alert(props: IStationsIcon<IconAlertName>): React.JSX.Element | null;
export {};
