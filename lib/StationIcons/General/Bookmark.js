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
var Bookmark = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 32 32", width: props.width || 24, height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M1 5.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C3.28 1 4.12 1 5.8 1h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C15 3.28 15 4.12 15 5.8V19l-7-4-7 4V5.8Z" }))); };
export default Bookmark;
