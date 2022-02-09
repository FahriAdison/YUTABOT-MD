"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebakkabupatenjson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function tebakkabupaten() {
    if (!exports.tebakkabupatenjson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json');
        exports.tebakkabupatenjson = await res.json();
    }
    return exports.tebakkabupatenjson[Math.floor(Math.random() * exports.tebakkabupatenjson.length)];
}
exports.default = tebakkabupaten;
