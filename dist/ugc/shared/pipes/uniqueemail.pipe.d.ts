import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class UniqueEmailPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
