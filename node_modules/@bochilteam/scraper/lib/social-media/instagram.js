"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instagramStory = exports.instagramdlv2 = exports.instagramdl = void 0;
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
async function instagramdl(url) {
    if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url))
        throw 'Invalid url!!';
    let form = new form_data_1.default();
    form.append('url', url);
    form.append('action', 'post');
    const { data } = await (0, axios_1.default)({
        url: 'https://snapinsta.app/action.php',
        method: 'POST',
        data: form,
        headers: {
            cookie: '_ga=GA1.2.1450546575.1637033620; __gads=ID=68a947f8174e0410-22fc6960b3ce005e:T=1637033620:RT=1637033620:S=ALNI_MbXTvxtxuISyAFMevds6-00PecLlw; _gid=GA1.2.1740129251.1639389841; PHPSESSID=s6v9d60qk41t8mmp15s3cdm1o0; _gat=1; __atuvc=8%7C46%2C0%7C47%2C0%7C48%2C0%7C49%2C4%7C50; __atuvs=61b82670279d8b87001; __atssc=google%3B6',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
            ...form.getHeaders()
        }
    });
    const $ = cheerio_1.default.load(data);
    let results = [];
    $('.row.download-box > div').each(function () {
        var _a;
        const thumbnail = Buffer.from((_a = $(this).find('.download-items__thumb > img[src]').attr('src')) === null || _a === void 0 ? void 0 : _a.split(';base64,')[1], 'base64');
        let url = $(this).find('.download-items__btn > a[href]').attr('href');
        if (!/https?:\/\//i.test(url))
            url = encodeURI('https://snapinsta.app' + url);
        results.push({ thumbnail, url });
    });
    return results;
}
exports.instagramdl = instagramdl;
async function instagramdlv2(url) {
    if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url))
        throw 'Invalid url!!';
    const payload = {
        url,
        submit: ''
    };
    const { data } = await (0, axios_1.default)({
        url: 'https://downloadgram.org/',
        method: 'POST',
        data: new URLSearchParams(Object.entries(payload)),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            cookie: '_ga=GA1.2.181197110.1640306988; _gid=GA1.2.1601935026.1640306988; __gads=ID=0e10c818b9622a98-2215e80586cf00a7:T=1640306988:RT=1640306988:S=ALNI_MbOGm-63H2TuFkIpAR6a8k0SfA6og; __atssc=google%3B2; _gat_gtag_UA_142480840_1=1; __atuvc=11%7C51; __atuvs=61c5192bc5d9e62100a',
            origin: 'https://downloadgram.org',
            referer: 'https://downloadgram.org/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        }
    });
    const $ = cheerio_1.default.load(data);
    let results = [];
    if ($('#downloadBox > a').length) {
        let temp = [];
        $('#downloadBox > video').each(function (i) {
            const thumbnail = $(this).attr('poster');
            const sourceUrl = $(this).find('source[src]').attr('src');
            if (thumbnail)
                temp.push({
                    thumbnail,
                    sourceUrl,
                    index: i
                });
        });
        $('#downloadBox > img').each(function (i) {
            const j = temp.findIndex(({ index }) => index === i);
            const thumbnail = $(this).attr('src');
            if (thumbnail)
                if (j !== -1)
                    temp[j].thumbnail = thumbnail;
                else
                    temp.push({ thumbnail, index: i });
        });
        $('#downloadBox > a').each(function (i) {
            const j = temp.findIndex(({ index }) => index === i);
            const url = $(this).attr('href');
            if (j !== -1)
                temp[j].url = url;
            else
                temp.push({ url, index: i });
        });
        results = temp.map(({ thumbnail, sourceUrl, url }) => ({ thumbnail, sourceUrl, url }));
    }
    return results;
}
exports.instagramdlv2 = instagramdlv2;
async function instagramStory(name) {
    const { data } = await axios_1.default.get(`https://www.insta-stories.net/data.php?username=${name}&t=${+new Date()}`);
    const $ = cheerio_1.default.load(data);
    let results = [];
    $('center').each(function () {
        let thumbnail, isVideo = false, link = $(this).find('img');
        if (link.length)
            thumbnail = link.attr('src');
        else {
            isVideo = true;
            thumbnail = $(this).find('video > source').attr('src');
        }
        const url = $(this).find('a.download-btn').attr('href');
        if (url)
            results.push({ thumbnail, isVideo, url });
    });
    return results;
}
exports.instagramStory = instagramStory;
