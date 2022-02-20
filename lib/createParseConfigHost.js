"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParseConfigHost = void 0;
var typescript_1 = __importDefault(require("typescript"));
function createParseConfigHost() {
    return {
        useCaseSensitiveFileNames: typescript_1.default.sys.useCaseSensitiveFileNames,
        fileExists: typescript_1.default.sys.fileExists,
        readFile: typescript_1.default.sys.readFile,
        readDirectory: typescript_1.default.sys.readDirectory
    };
}
exports.createParseConfigHost = createParseConfigHost;
