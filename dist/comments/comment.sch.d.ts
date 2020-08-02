export declare class Comment {
    publicId: number;
    author: number;
    text: string;
    stamp: moment.Moment;
    re: number;
    type: `Beep` | `Comment`;
    constructor(publicId: number, author: number, text: string, stamp: moment.Moment, re: number, type: `Beep` | `Comment`);
}
