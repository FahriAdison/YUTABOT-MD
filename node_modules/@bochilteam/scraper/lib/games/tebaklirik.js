"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebaklirikjson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tebaklirik() {
    if (!exports.tebaklirikjson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
        exports.tebaklirikjson = await res.json();
    }
    return exports.tebaklirikjson[Math.floor(Math.random() * exports.tebaklirikjson.length)];
}
exports.default = tebaklirik;
