import moment from 'moment';
export declare class CommentDTO {
    publicId: number;
    author: number;
    text: string;
    stamp: moment.Moment;
    re: number;
    type: `Beep` | `Comment`;
}
