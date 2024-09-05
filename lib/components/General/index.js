"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIconsComponent_1 = __importDefault(require("../../helpers/createIconsComponent"));
var Icons_General_json_1 = __importDefault(require("./json/Icons_General.json"));
var Icons_general_ttf_1 = __importDefault(require("../../fonts/Icons_general.ttf"));
var General = (0, createIconsComponent_1.default)("General", Icons_General_json_1.default, Icons_general_ttf_1.default);
exports.default = General;
