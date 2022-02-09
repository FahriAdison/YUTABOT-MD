interface tebakgambarresult {
    index: number;
    img: string;
    jawaban: string;
    deskripsi: string;
}
export declare let tebakgambarjson: tebakgambarresult[];
export default function tebakgambar(): Promise<tebakgambarresult>;
export {};
