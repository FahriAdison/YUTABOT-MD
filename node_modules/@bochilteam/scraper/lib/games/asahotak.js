"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asahotakjson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function asahotak() {
    if (!exports.asahotakjson) {
        let res = await (0, node_fetch_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
        exports.asahotakjson = await res.json();
    }
    return exports.asahotakjson[Math.floor(Math.random() * exports.asahotakjson.length)];
}
exports.default = asahotak;
