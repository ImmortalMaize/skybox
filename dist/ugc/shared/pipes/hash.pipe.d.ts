import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class HashPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
