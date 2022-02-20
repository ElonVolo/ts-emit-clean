"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmitFiles = void 0;
var typescript_1 = __importDefault(require("typescript"));
function getEmitFiles(_a) {
    var options = _a.options, fileNames = _a.fileNames;
    var program = typescript_1.default.createProgram({ options: options, rootNames: fileNames });
    var emitFiles = [];
    program.emit(undefined, function (fileName) {
        emitFiles.push(fileName);
    });
    return emitFiles;
}
exports.getEmitFiles = getEmitFiles;
