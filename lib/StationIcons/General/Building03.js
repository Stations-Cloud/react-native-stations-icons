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
var Building03 = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 32 32", width: props.width || 24, height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6.5 5h2.75M6.5 9h2.75M6.5 13h2.75m3.5-8h2.75m-2.75 4h2.75m-2.75 4h2.75m3.5 6V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 1 16.92 1 15.8 1H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 2.52 3 3.08 3 4.2V19m18 0H1" }))); };
export default Building03;
