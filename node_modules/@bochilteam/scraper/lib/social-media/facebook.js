"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookdlv2 = exports.facebookdl = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = __importDefault(require("cheerio"));
// only support download video yet
async function facebookdl(url) {
    // https://fb.watch/9V3JrKcqHi/
    const res = await (0, node_fetch_1.default)(`https://youtube4kdownloader.com/ajax/getLinks.php?video=${encodeURIComponent(url)}&rand=a95ce6c6be8b6`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        }
    });
    const { data: { id, thumbnail, duration, a, av, v } } = await res.json();
    const result = a.concat(av).concat(v).map(({ size, ext, url, quality, vcodec, fid }) => {
        let isVideo = ext === 'mp4';
        let isWebm = ext === 'webm';
        return {
            size,
            ext,
            url,
            quality,
            vcodec,
            fid,
            isVideo: isVideo || isWebm,
            isAudio: /audio/i.test(quality) || (isVideo && !isWebm)
        };
        // ext webm video without audio
    });
    return {
        id, thumbnail, duration, result
    };
}
exports.facebookdl = facebookdl;
async function facebookdlv2(url) {
    var _a, _b;
    const params = {
        url: url,
    };
    const res = await (0, node_fetch_1.default)('https://snapsave.app/action.php?lang=id', {
        method: 'POST',
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            cookie: 'PHPSESSID=8bp3pmf9b22vm9ihvuv6pn1h3d; current_language=id; _ga=GA1.2.5314845.1641630867; _gid=GA1.2.1966536698.1641630867; _gat=1; __gads=ID=66279abc1ad9d914-226d4524bccf00f8:T=1641630868:RT=1641630868:S=ALNI_MbL7LSCkGI6VwO33W7V6VkOozebNg; __atuvc=1%7C1; __atuvs=61d94c9354d617a5000; __atssc=google%3B1',
            origin: 'https://snapsave.app',
            referer: 'https://snapsave.app/id',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        },
        body: new URLSearchParams(Object.entries(params))
    });
    let result = [];
    const $ = cheerio_1.default.load((await res.json()).data);
    $('table.table > tbody > tr').each(function () {
        var _a, _b;
        const el = $(this).find('td');
        if (/tidak/i.test(el.eq(1).text())) {
            const quality = (_b = (_a = el.eq(0).text().split('(')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.trim();
            const url = el.eq(2).find('a[href]').attr('href');
            result.push({ quality, url });
        }
    });
    return {
        id: (_b = (_a = $('div.media-content > div.content > p > strong').text().split('#')) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.trim(),
        thumbnail: $('figure > p.image > img[src]').attr('src'),
        result
    };
}
exports.facebookdlv2 = facebookdlv2;
