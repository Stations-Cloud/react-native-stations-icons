"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var iconMap = {
    activity: "\uE000\uE62C\uE40D\uE0F2",
    "activity-heart": "\uE2F8\uEA31\uE009",
    anchor: "\uE000\uE544\uED3E\uE04C",
    archive: "\uE000\uE2CA\uE720\uE03F",
    "asterisk-01": "\uE000\uE655\uE856\uE0C5",
    "asterisk-02": "\uE000\uE655\uE856\uE0C4",
    "at-sign": "\uE000\uE2C3\uE165\uE0EA",
    bookmark: "\uE779\uE7A6\uE037",
    "bookmark-add": "\uE744\uEC08\uE08B",
    "bookmark-check": "\uE558\uE65E\uE0B2",
    "bookmark-minus": "\uE561\uE3E2\uE01A",
    "bookmark-x": "\uE000\uE4BD\uECCB\uE060",
    "building-01": "\uE000\uE548\uE8D1\uE047",
    "building-02": "\uE000\uE548\uE8D1\uE046",
    "building-03": "\uE000\uE548\uE8D1\uE045",
    "building-04": "\uE000\uE548\uE8D1\uE044",
};
function General(_a) {
    var name = _a.name, color = _a.color, _b = _a.size, size = _b === void 0 ? 32 : _b;
    var General = iconMap[name];
    return (react_1.default.createElement(react_native_1.Text, { style: [styles.icon, { fontSize: size, color: color }] }, General));
}
var styles = react_native_1.StyleSheet.create({
    icon: {
        fontFamily: "Icons-General",
    },
});
exports.default = General;
