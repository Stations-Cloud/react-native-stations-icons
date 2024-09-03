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
var AlertHexagon = function (props) { return (React.createElement(Svg, __assign({}, props, { width: props.width || 24, viewBox: "0 0 32 32", height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4m0 4h.01M3 7.941v8.117c0 .343 0 .515.05.667a1 1 0 0 0 .215.364c.109.119.258.202.558.368l7.4 4.111c.284.158.425.237.575.267.133.028.27.028.403 0 .15-.03.292-.11.576-.267l7.4-4.11c.3-.167.45-.25.558-.369a1 1 0 0 0 .215-.364c.05-.152.05-.324.05-.667V7.941c0-.342 0-.514-.05-.666a1 1 0 0 0-.215-.364c-.109-.119-.258-.202-.558-.368l-7.4-4.111c-.284-.158-.425-.237-.575-.268a1 1 0 0 0-.403 0c-.15.031-.292.11-.576.268l-7.4 4.11c-.3.167-.45.25-.558.369a1 1 0 0 0-.215.364C3 7.427 3 7.599 3 7.94Z" }))); };
export default AlertHexagon;
