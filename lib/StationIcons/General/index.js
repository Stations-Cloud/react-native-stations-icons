var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
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
var iconsGeneral = {
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
};
export default function General(props) {
    var name = props.name, size = props.size, color = props.color, svgProps = __rest(props, ["name", "size", "color"]);
    var General = iconsGeneral[name];
    if (!General) {
        return null;
    }
    return (React.createElement(General, __assign({ name: name, size: size, color: color, width: size, height: size }, svgProps)));
}
