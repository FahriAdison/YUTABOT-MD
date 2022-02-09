interface Irestwitdl {
    quality: string;
    type: string;
    url: string;
    isVideo: boolean;
}
export declare function twitterdl(url: string): Promise<Irestwitdl[] | []>;
declare type Irestwitdlv2 = Irestwitdl | {
    isVideo?: void;
};
export declare function twitterdlv2(url: string): Promise<Irestwitdlv2[]>;
export {};
