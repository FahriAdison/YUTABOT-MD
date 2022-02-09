interface tebakkataresults {
    index: number;
    soal: string;
    jawaban: string;
}
export declare let tebakkatajson: tebakkataresults[];
export default function tebakkata(): Promise<tebakkataresults>;
export {};
