"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIconsComponent_1 = __importDefault(require("../../helpers/createIconsComponent"));
var Teste_04Config_json_1 = __importDefault(require("./json/Teste_04Config.json"));
var Teste_04_ttf_1 = __importDefault(require("../../fonts/Teste_04.ttf"));
console.log("***font", Teste_04_ttf_1.default);
var General = (0, createIconsComponent_1.default)("Teste_04", Teste_04Config_json_1.default, Teste_04_ttf_1.default);
exports.default = General;
