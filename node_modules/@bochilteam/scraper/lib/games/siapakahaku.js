"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.siapakahakujson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function siapakahaku() {
    if (!exports.siapakahakujson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
        exports.siapakahakujson = await res.json();
    }
    return exports.siapakahakujson[Math.floor(Math.random() * exports.siapakahakujson.length)];
}
exports.default = siapakahaku;
