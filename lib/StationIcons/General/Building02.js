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
var Building02 = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 32 32", width: props.width || 24, height: props.height || 24, fill: "none" }),
    React.createElement(Path, { stroke: props.color || "#616161", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.7 19v-5.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.94 12 12.66 12 12.1 12H9.3c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C7.7 12.76 7.7 13.04 7.7 13.6V19m-6-14a3 3 0 1 0 6 0 3 3 0 1 0 6 0 3 3 0 0 0 6 0M4.9 19h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.18 1 17.62 1 16.5 1H4.9c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1.7 2.52 1.7 3.08 1.7 4.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.22 19 3.78 19 4.9 19Z" }))); };
export default Building02;
