"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebakkatajson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tebakkata() {
    if (!exports.tebakkatajson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
        exports.tebakkatajson = await res.json();
    }
    return exports.tebakkatajson[Math.floor(Math.random() * exports.tebakkatajson.length)];
}
exports.default = tebakkata;
