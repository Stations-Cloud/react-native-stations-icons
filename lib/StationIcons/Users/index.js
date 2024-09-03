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
import FaceContent from "./FaceContent";
import FaceFrown from "./FaceFrown";
var iconsUser = {
    "face-content": FaceContent,
    "face-frown": FaceFrown,
};
export default function User(props) {
    var name = props.name, size = props.size, color = props.color, svgProps = __rest(props, ["name", "size", "color"]);
    var User = iconsUser[name];
    if (!User) {
        return null;
    }
    return (React.createElement(User, __assign({ name: name, size: size, width: size, color: color, height: size }, svgProps)));
}
