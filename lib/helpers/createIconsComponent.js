"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Font = __importStar(require("expo-font"));
var react_native_1 = require("react-native");
var createIconsComponent = function (fontName, json, font) {
    return function (_a) {
        var _b;
        var name = _a.name, color = _a.color, size = _a.size;
        var loaded = Font.useFonts((_b = {},
            _b[fontName] = font,
            _b))[0];
        if (!loaded) {
            return (react_1.default.createElement(react_native_1.Text, null, " "));
        }
        return (react_1.default.createElement(react_native_1.Text, { style: { fontSize: size, color: color, fontFamily: fontName } }, unescape(String(json[name]))));
    };
};
exports.default = createIconsComponent;
