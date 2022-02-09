interface asahotakresult {
    index: number;
    soal: string;
    jawaban: string;
}
export declare let asahotakjson: asahotakresult[];
export default function asahotak(): Promise<asahotakresult>;
export {};
