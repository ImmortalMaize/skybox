import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { UsersService } from 'src/ugc/users/users.service';
export declare class UniqueEmailPipe implements PipeTransform {
    private users;
    constructor(users: UsersService);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
