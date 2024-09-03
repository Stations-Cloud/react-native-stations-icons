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
import * as React from "react";
import Svg, { Path } from "react-native-svg";
var BookmarkX = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 32 32", width: props.width || 24, height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m6.2 5.5 5 5m0-5-5 5m9.5 8.5V5.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.31-1.311C13.42 1 12.58 1 10.9 1H6.5c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311C1.7 3.28 1.7 4.12 1.7 5.8V19l7-4 7 4Z" }))); };
export default BookmarkX;
