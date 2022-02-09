interface caklontongresult {
    index: number;
    soal: string;
    jawaban: string;
    deskripsi: string;
}
export declare let caklontongjson: caklontongresult[];
export default function caklontong(): Promise<caklontongresult>;
export {};
