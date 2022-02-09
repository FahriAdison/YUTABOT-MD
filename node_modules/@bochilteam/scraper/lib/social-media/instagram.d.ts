/// <reference types="node" />
interface Iigdl {
    thumbnail: Buffer;
    url: string;
}
export declare function instagramdl(url: string): Promise<Iigdl[]>;
declare type Iigdlv2 = Iigdl | {
    thumbnail: string;
    sourceUrl?: string;
};
export declare function instagramdlv2(url: string): Promise<Iigdlv2[]>;
interface Iigstory {
    thumbnail: string;
    isVideo: boolean;
    url: string;
}
export declare function instagramStory(name: string): Promise<Iigstory[]>;
export {};
