"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alquran = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function alquran() {
    const data = await (await (0, node_fetch_1.default)('https://raw.githubusercontent.com/rzkytmgr/quran-api/master/data/quran.json')).json();
    return data;
}
exports.alquran = alquran;
