import { ConclusionsService2 } from "../corpses/conclusions.service2";
import { CommentsService } from "./comments.service";
import { CommentDTO } from "./comment.dto";
export declare class CommentsController {
    private conclusions2;
    private service;
    constructor(conclusions2: ConclusionsService2, service: CommentsService);
    save(comment: CommentDTO, req: any, res: any): void;
}
