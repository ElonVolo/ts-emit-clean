"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConfig = void 0;
var typescript_1 = __importDefault(require("typescript"));
var createParseConfigHost_1 = require("./createParseConfigHost");
function parseConfig(basePath) {
    var configFileName = typescript_1.default.findConfigFile(basePath, typescript_1.default.sys.fileExists, "tsconfig.json");
    if (!configFileName) {
        throw new Error("tsconfig.json file not found");
    }
    var configFileContents = typescript_1.default.sys.readFile(configFileName) || "";
    var _a = typescript_1.default.parseConfigFileTextToJson(configFileName, configFileContents), config = _a.config, error = _a.error;
    if (error) {
        throw new Error("Error parsing TS config file ".concat(configFileName, ": ").concat(error.messageText));
    }
    var _b = typescript_1.default.parseJsonConfigFileContent(config, (0, createParseConfigHost_1.createParseConfigHost)(), basePath), options = _b.options, fileNames = _b.fileNames, errors = _b.errors;
    if (errors.length > 0) {
        throw new Error("Errors parsing TS config: ".concat(JSON.stringify(errors)));
    }
    return { options: options, fileNames: fileNames };
}
exports.parseConfig = parseConfig;
