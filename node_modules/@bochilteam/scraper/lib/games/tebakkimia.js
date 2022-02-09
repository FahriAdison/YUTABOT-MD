"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebakkimiajson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tebakkimia() {
    if (!exports.tebakkimiajson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');
        exports.tebakkimiajson = await res.json();
    }
    return exports.tebakkimiajson[Math.floor(Math.random() * exports.tebakkimiajson.length)];
}
exports.default = tebakkimia;
