interface IresTTdl {
    author: {
        unique_id: string;
        nickname: string;
        avatar: string;
    };
    description: string;
    video: {
        with_watermark: string;
        no_watermark: string;
        no_watermark_raw: string;
    };
    music: string;
}
export declare function tiktokdl(url: string): Promise<IresTTdl | {}>;
declare type IresTTdlv2 = IresTTdl | {
    description?: void;
    video: {
        no_watermark: string;
        no_watermark_hd: string;
    };
    music?: void;
};
export declare function tiktokdlv2(url: string): Promise<IresTTdlv2>;
interface IresTTfyp {
    id: string;
    desc: string;
    createdTime: Date;
    video: {
        id: string;
        height: number;
        width: number;
        duration: number;
        ratio: string;
        cover: string;
        originCover: string;
        dynamicCover: string;
        playAddr: string;
        downloadAddr: string;
        shareCover: string[];
        reflowCover: string;
        bitrate: number;
        encodedType: string;
        format: string;
        videoQuality: string;
        encodeUserTag: string;
        codecType: string;
        definition: string;
    };
    author: {
        id: string;
        uniqueId: string;
        nickname: string;
        avatarThumb: string;
        avatarMedium: string;
        avatarLarger: string;
        signature: string;
        verified: boolean;
        secUid: string;
        secret: boolean;
        ftc: boolean;
        relation: number;
        openFavorite: boolean;
        commentSetting: number;
        duetSetting: number;
        stitchSetting: number;
        privateAccount: boolean;
        isADVirtual: boolean;
    };
    music: {
        id: string;
        title: string;
        playUrl: string;
        coverThumb: string;
        coverMedium: string;
        coverLarge: string;
        authorName: string;
        original: boolean;
        duration: number;
        album: string;
    };
    challenges?: {
        id: string;
        title: string;
        desc: string;
        profileThumb: string;
        profileMedium: string;
        profileLarger: string;
        coverThumb: string;
        coverMedium: string;
        coverLarger: string;
        isCommerce: boolean;
    }[];
    stats: {
        diggCount: number;
        shareCount: number;
        commentCount: number;
        playCount: number;
    };
    duetInfo: {
        duetFromId: string;
    };
    originalItem: boolean;
    officalItem: boolean;
    textExtra?: {
        awemeId: string;
        start: number;
        end: number;
        hashtagName: string;
        hashtagId: string;
        type: 1;
        userId: string;
        isCommerce: boolean;
        userUniqueId: string;
        secUid: string;
        subType: number;
    }[];
    secret: boolean;
    forFriend: boolean;
    digged: boolean;
    itemCommentStatus: number;
    showNotPass: boolean;
    vl1: boolean;
    itemMute: boolean;
    authorStats: {
        followingCount: number;
        followerCount: number;
        heartCount: number;
        videoCount: number;
        diggCount: number;
        heart: number;
    };
    privateItem: boolean;
    duetEnabled: boolean;
    stitchEnabled: boolean;
    shareEnabled: boolean;
    isAd: boolean;
    duetDisplay: number;
    stitchDisplay: number;
}
export declare function tiktokfyp(): Promise<IresTTfyp[] | []>;
export {};
