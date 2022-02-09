"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caklontongjson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function caklontong() {
    if (!exports.caklontongjson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json');
        exports.caklontongjson = await res.json();
    }
    return exports.caklontongjson[Math.floor(Math.random() * exports.caklontongjson.length)];
}
exports.default = caklontong;
