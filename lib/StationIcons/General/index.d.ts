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
};
type IconGeneralName = keyof typeof iconsGeneral;
export default function General(props: IStationsIcon<IconGeneralName>): React.JSX.Element | null;
export {};
