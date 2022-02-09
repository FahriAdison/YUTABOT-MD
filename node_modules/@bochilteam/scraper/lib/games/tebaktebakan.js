"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebaktebakanjson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tebaktebakan() {
    if (!exports.tebaktebakanjson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
        exports.tebaktebakanjson = await res.json();
    }
    return exports.tebaktebakanjson[Math.floor(Math.random() * exports.tebaktebakanjson.length)];
}
exports.default = tebaktebakan;
