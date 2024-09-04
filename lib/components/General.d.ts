import React from "react";
declare const iconMap: {
    readonly activity: "";
    readonly "activity-heart": "";
    readonly anchor: "";
    readonly archive: "";
    readonly "asterisk-01": "";
    readonly "asterisk-02": "";
    readonly "at-sign": "";
    readonly bookmark: "";
    readonly "bookmark-add": "";
    readonly "bookmark-check": "";
    readonly "bookmark-minus": "";
    readonly "bookmark-x": "";
    readonly "building-01": "";
    readonly "building-02": "";
    readonly "building-03": "";
    readonly "building-04": "";
};
interface IStationsIcon {
    name: keyof typeof iconMap;
    size?: number;
    color?: string;
}
declare function General({ name, color, size }: IStationsIcon): React.JSX.Element;
export default General;
