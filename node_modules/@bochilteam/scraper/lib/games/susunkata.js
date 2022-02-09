"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.susunkatajson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function susunkata() {
    if (!exports.susunkatajson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
        exports.susunkatajson = await res.json();
    }
    return exports.susunkatajson[Math.floor(Math.random() * exports.susunkatajson.length)];
}
exports.default = susunkata;
