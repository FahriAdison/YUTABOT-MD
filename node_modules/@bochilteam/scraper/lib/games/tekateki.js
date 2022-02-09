"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tekatekijson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tekateki() {
    if (!exports.tekatekijson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
        exports.tekatekijson = await res.json();
    }
    return exports.tekatekijson[Math.floor(Math.random() * exports.tekatekijson.length)];
}
exports.default = tekateki;
