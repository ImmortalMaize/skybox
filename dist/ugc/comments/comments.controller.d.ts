import { ConclusionsService2 } from "src/corpses/conclusions.service2";
import { CommentsService } from "./comments.service";
import { commentSaveDTO } from "./schemas/comment.dto";
export declare class CommentsController {
    private conclusions2;
    private service;
    constructor(conclusions2: ConclusionsService2, service: CommentsService);
    save({ author, text, re }: commentSaveDTO): Promise<any>;
    searchMany(): Promise<any>;
}
