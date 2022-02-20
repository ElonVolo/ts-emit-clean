"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var getEmitFiles_1 = require("./getEmitFiles");
var parseConfig_1 = require("./parseConfig");
var basePath = process.cwd();
var _a = (0, parseConfig_1.parseConfig)(basePath), options = _a.options, fileNames = _a.fileNames;
(0, getEmitFiles_1.getEmitFiles)({ options: options, fileNames: fileNames }).forEach(function (file) {
    if (fs_1.default.existsSync(file)) {
        fs_1.default.unlinkSync(file);
    }
});
