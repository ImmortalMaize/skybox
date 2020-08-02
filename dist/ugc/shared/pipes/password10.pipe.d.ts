import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class Password10Pipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
