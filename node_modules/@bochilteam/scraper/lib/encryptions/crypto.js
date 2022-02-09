"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHash = exports.randomBytes = exports.randomUUID = void 0;
const crypto_1 = __importDefault(require("crypto"));
const node_fetch_1 = __importDefault(require("node-fetch"));
function randomUUID(opts) {
    if (typeof crypto_1.default.randomUUID === 'function')
        return crypto_1.default.randomUUID(opts);
    return new Promise(async (resolve) => {
        const json = await (await (0, node_fetch_1.default)('https://www.uuidtools.com/api/generate/v4/count/1')).json();
        return resolve(json[0]);
    });
}
exports.randomUUID = randomUUID;
function randomBytes(size) {
    return crypto_1.default.randomBytes(size).toString('hex');
}
exports.randomBytes = randomBytes;
function createHash(algorithm /* 'md4' | 'md5' | 'sha1' | 'sha256' | 'sha512 */, data) {
    return crypto_1.default.createHash(algorithm).update(data).digest('hex');
}
exports.createHash = createHash;
