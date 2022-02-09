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
exports.search = void 0;
const piscina_1 = __importDefault(require("piscina"));
const __1 = require("..");
const util_1 = __importDefault(require("./util"));
function search({ c, language, question, length = 10, options }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!piscina_1.default.isWorkerThread) {
            throw new Error('You\'re not able to use this command');
        }
        try {
            if (!__1.Brainly.isValidLanguage(language)) {
                return {
                    'err': 'INVALID_LANGUAGE',
                };
            }
            const body = __1.Brainly.getRequestParams(question, length);
            const response = yield __1.Brainly.client(c).post(`graphql/${language.toLowerCase()}`, body, options);
            const json = response.data;
            const validJSON = json[0].data.questionSearch.edges;
            const objects = validJSON.map((obj) => {
                const question = util_1.default.convertQuestion(obj.node);
                const answers = obj.node.answers.nodes.map((answerObj) => util_1.default.convertAnswer(answerObj));
                return {
                    question, answers,
                };
            });
            return objects;
        }
        catch (err) {
            return {
                'err': err.message,
            };
        }
    });
}
exports.search = search;
