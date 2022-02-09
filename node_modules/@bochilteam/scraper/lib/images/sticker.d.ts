interface IstickerTele {
    title: string;
    icon: string;
    link: string;
    stickers: string[];
}
export declare function stickerTelegram(query: string, page?: number): Promise<IstickerTele[]>;
export declare function stickerLine(query: string): Promise<{
    id: string;
    title: string;
    description?: string;
    url: string;
    sticker: string;
    stickerAnimated?: string;
    stickerSound?: string;
    authorId: string;
    authorName: string;
}[]>;
export {};
