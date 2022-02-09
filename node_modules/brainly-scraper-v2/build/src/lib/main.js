"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brainly = void 0;
const piscina_1 = __importDefault(require("piscina"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const fetcher_1 = require("./fetcher");
const util_1 = __importDefault(require("./util"));
const cache_1 = require("./cache");
const package_json_1 = require("../../package.json");
class Brainly {
    constructor(country = 'id') {
        this.country = country;
        this.version = package_json_1.version;
        this.worker = new piscina_1.default({
            'filename': path_1.default.resolve(__dirname, 'worker.js'),
            'maxThreads': 30,
        });
        this.cache = new cache_1.Cache();
        if (!Brainly.isValidLanguage(country)) {
            throw new TypeError('Please put valid country!');
        }
    }
    search(language = 'id', question, length = 10, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.cache.has(language, question.toLowerCase())) {
                    return this.cache.get(language, question.toLowerCase());
                }
                const result = yield this.worker.run({
                    'c': this.country.toLowerCase(),
                    'question': question,
                    'length': length,
                    'options': options,
                    'language': language,
                }, {
                    'name': 'search',
                });
                if (result.err) {
                    throw new Error(result.err);
                }
                else {
                    this.cache.set(language, question, result);
                    return result;
                }
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    static getRequestParams(question, length = 10) {
        return [{
                operationName: 'SearchQuery',
                query: config_1.graphqlQuery,
                variables: {
                    len: length,
                    query: question,
                },
            }];
    }
    static isValidLanguage(lang) {
        return config_1.languages.includes(lang.toLowerCase()) && typeof lang === 'string';
    }
    static getBaseURL(country) {
        return config_1.baseURLs[country];
    }
    searchWithMT(language = 'id', question, length = 10, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cache.has(language, question.toLowerCase())) {
                return this.cache.get(language, question.toLowerCase());
            }
            return yield new Promise((resolve) => {
                let shouldReturn = true;
                config_1.languages.every((l) => {
                    this.worker.run({
                        'c': l,
                        'language': language,
                        'question': question,
                        'length': length,
                        'options': options,
                    }, { 'name': 'search' }).then((d) => {
                        if (!d.err) {
                            shouldReturn = false;
                            this.cache.set(language, question.toLowerCase(), d);
                            resolve(d);
                        }
                    });
                    return shouldReturn;
                });
            });
        });
    }
    static client(country) {
        return (0, fetcher_1.fetcherClient)(Brainly.getBaseURL(country), {
            headers: {
                'User-Agent': util_1.default.getRandomUA(),
                'Origin': Brainly.getBaseURL(country),
                'Referer': Brainly.getBaseURL(country),
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'TE': 'trailers',
            },
        });
    }
}
exports.Brainly = Brainly;
