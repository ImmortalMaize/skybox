import { PipeTransform, Injectable, ArgumentMetadata, NotAcceptableException } from '@nestjs/common';

@Injectable()
export class Password10Pipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (typeof(value) == 'string' && value.length >= 10) {
      return value;
    } else {
      throw new NotAcceptableException()
    }
  }
}
