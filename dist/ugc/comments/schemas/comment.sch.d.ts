export declare const commentBox: any;
export interface Comment {
    author: number;
    text: string;
    stamp: moment.Moment;
    re: number;
    retype: 'Beep' | 'Comment';
}
