"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebakbenderajson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tebakbendera() {
    if (!exports.tebakbenderajson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json');
        exports.tebakbenderajson = await res.json();
    }
    return exports.tebakbenderajson[Math.floor(Math.random() * exports.tebakbenderajson.length)];
}
exports.default = tebakbendera;
