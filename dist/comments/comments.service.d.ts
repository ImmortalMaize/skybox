import { Comment } from "./comment.sch";
import { CommentDTO } from "./comment.dto";
import { ConclusionsService2 } from "src/corpses/conclusions.service2";
import { UsersService } from "../users/users.service";
export declare class CommentsService {
    private conclusions2;
    private users;
    constructor(conclusions2: ConclusionsService2, users: UsersService);
    comments: Comment[];
    save(comment: CommentDTO): void | Comment[];
    tether(userId: any, commentId: any): void;
    searchOne(publicId: number): Comment;
    searchMany(): void;
    searchAll(): void;
    patchOne(): void;
    patchMany(): void;
    patchAll(): void;
    wasteOne(): void;
    wasteMany(): void;
    wasteAll(): void;
}
