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
var Building05 = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 32 32", width: props.width || 24, height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12.7 9h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108V19m-8 0V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C11.18 1 10.62 1 9.5 1H5.9c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.7 2.52 2.7 3.08 2.7 4.2V19m19 0h-20M6.2 5h3m-3 4h3m-3 4h3" }))); };
export default Building05;
