import { Comment } from "./schemas/comment.sch";
import { ConclusionsService2 } from "src/corpses/conclusions.service2";
import { Model } from 'mongoose';
export declare class CommentsService {
    private conclusions2;
    private model;
    constructor(conclusions2: ConclusionsService2, model: Model<Comment>);
    comments: Comment[];
    save(author: number, text: string, re: number): Promise<any>;
    searchOne(object: any): Promise<any>;
    search(object?: any): Promise<any>;
    patchOne(): void;
    patchMany(): void;
    wasteOne(): void;
    wasteMany(): void;
}
