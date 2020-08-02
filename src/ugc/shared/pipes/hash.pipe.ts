import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import bcrypt from 'bcrypt'

@Injectable()
export class HashPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return bcrypt.hash(value, 10);
  }
}
