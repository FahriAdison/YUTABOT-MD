"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebakgambarjson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tebakgambar() {
    if (!exports.tebakgambarjson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
        exports.tebakgambarjson = await res.json();
    }
    return exports.tebakgambarjson[Math.floor(Math.random() * exports.tebakgambarjson.length)];
}
exports.default = tebakgambar;
