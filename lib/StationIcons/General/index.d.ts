import * as React from "react";
import { IStationsIcon } from "../interface/IStationsIcon";
declare const iconsGeneral: {
    readonly activity: (props: IStationsIcon) => React.JSX.Element;
    readonly "activity-heart": (props: IStationsIcon) => React.JSX.Element;
    readonly anchor: (props: IStationsIcon) => React.JSX.Element;
    readonly archive: (props: IStationsIcon) => React.JSX.Element;
    readonly "asterisk-01": (props: IStationsIcon) => React.JSX.Element;
    readonly "asterisk-02": (props: IStationsIcon) => React.JSX.Element;
    readonly "at-sign": (props: IStationsIcon) => React.JSX.Element;
    readonly bookmark: (props: IStationsIcon) => React.JSX.Element;
    readonly "bookmark-add": (props: IStationsIcon) => React.JSX.Element;
    readonly "bookmark-check": (props: IStationsIcon) => React.JSX.Element;
    readonly "bookmark-minus": (props: IStationsIcon) => React.JSX.Element;
    readonly "bookmark-x": (props: IStationsIcon) => React.JSX.Element;
    readonly "building-01": (props: IStationsIcon) => React.JSX.Element;
    readonly "building-02": (props: IStationsIcon) => React.JSX.Element;
    readonly "building-03": (props: IStationsIcon) => React.JSX.Element;
    readonly "building-04": (props: IStationsIcon) => React.JSX.Element;
    readonly "building-05": (props: IStationsIcon) => React.JSX.Element;
};
type IconGeneralName = keyof typeof iconsGeneral;
export default function General(props: IStationsIcon<IconGeneralName>): React.JSX.Element | null;
export {};
