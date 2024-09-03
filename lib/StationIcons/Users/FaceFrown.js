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
var FaceFrown = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 32 32", width: props.width || 24, height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 16s-1.5-2-4-2-4 2-4 2m7-7h.01M9 9h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.5-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }))); };
export default FaceFrown;
