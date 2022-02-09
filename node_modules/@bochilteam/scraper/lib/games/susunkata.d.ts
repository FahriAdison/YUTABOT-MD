interface susunkataresult {
    index: number;
    soal: string;
    tipe: string;
    jawaban: string;
}
export declare let susunkatajson: susunkataresult[];
export default function susunkata(): Promise<susunkataresult>;
export {};
