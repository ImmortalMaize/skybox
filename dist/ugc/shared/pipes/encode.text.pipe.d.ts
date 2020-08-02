import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class EncodeTextPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): any;
}
