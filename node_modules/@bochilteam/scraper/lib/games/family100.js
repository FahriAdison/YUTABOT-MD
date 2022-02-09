"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.family100json = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function family100() {
    if (!exports.family100json) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json');
        exports.family100json = await res.json();
    }
    return exports.family100json[Math.floor(Math.random() * exports.family100json.length)];
}
exports.default = family100;
