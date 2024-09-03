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
var Archive = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 32 32", width: props.width || 24, height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 7.997a2.295 2.295 0 0 1-.39-.035A2 2 0 0 1 2.038 6.39C2 6.197 2 5.965 2 5.5s0-.697.038-.89A2 2 0 0 1 3.61 3.038C3.803 3 4.035 3 4.5 3h15c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89s0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.107.02-.226.03-.39.035M10 13h4M4 8h16v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 21 16.88 21 15.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 18.72 4 17.88 4 16.2V8Z" }))); };
export default Archive;
