import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import he from 'he'

@Injectable()
export class EncodeTextPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    try {
      return he.encode(value);
    } catch(err) {
      return err
    }
  }
}
