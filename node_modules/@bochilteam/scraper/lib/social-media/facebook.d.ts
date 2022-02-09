interface Iresfacebookdl {
    id: string;
    thumbnail: string;
    duration: number;
    result: {
        size?: string;
        ext: string;
        url: string;
        quality: string;
        vcodec?: string;
        fid: string;
        isVideo: boolean;
        isAudio: boolean;
    }[];
}
export declare function facebookdl(url: string): Promise<Iresfacebookdl>;
interface Iresfacebookdlv2 {
    id: string;
    thumbnail: string;
    result: {
        quality: string;
        url: string;
    }[];
}
export declare function facebookdlv2(url: string): Promise<Iresfacebookdlv2>;
export {};
