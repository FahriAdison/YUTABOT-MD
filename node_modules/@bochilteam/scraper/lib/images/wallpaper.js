"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
async function wallpaper(query) {
    const { data } = await axios_1.default.get(`https://www.shutterstock.com/search/${query}`, {
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9,id;q=0.8',
            // cookie: '_csrf=DLixL776iH1Yv7Ck9wHekk24; _ga=GA1.2.1481444664.1639216586; _gid=GA1.2.348540858.1639216586; _gat=1; _hjFirstSeen=1; _hjSession_2571802=eyJpZCI6ImVkZDUzMWJhLWNjYTgtNDgyMy1hZmUyLWVjNmFhNWMxZjg3ZCIsImNyZWF0ZWQiOjE2MzkyMTY1ODY0Nzl9; _hjAbsoluteSessionInProgress=0; _hjSessionUser_2571802=eyJpZCI6IjIxZGNhYTc5LWRlMTgtNWE5Ni05ZWE2LTdkYjg4NGZhNjIxMSIsImNyZWF0ZWQiOjE2MzkyMTY1ODYyNDMsImV4aXN0aW5nIjp0cnVlfQ==',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
        }
    });
    const $ = cheerio_1.default.load(data);
    let results = [...new Set([...$.html().matchAll(/https?:\/\/(image|www)\.shutterstock\.com\/([^"]+)/gmi)].map(v => v[0]).filter(v => /.*\.jpe?g|png$/gi.test(v)))];
    return results;
}
exports.default = wallpaper;
