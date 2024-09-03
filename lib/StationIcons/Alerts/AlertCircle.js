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
var AlertCircle = function (props) { return (React.createElement(Svg, __assign({}, props, { width: props.width || 24, viewBox: "0 0 32 32", height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 12v4m0 4h.01M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Z" }))); };
export default AlertCircle;
