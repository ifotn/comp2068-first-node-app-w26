"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// food.  3rd param is our async callback that returns an error or the file's contents
fs_1.default.readFile('food.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fileContents);
        console.log('We ate this');
    }
});
// drinks.  3rd param is our async callback that returns an error or the file's contents
fs_1.default.readFile('drinks.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fileContents);
    }
});
console.log('We drank this');
