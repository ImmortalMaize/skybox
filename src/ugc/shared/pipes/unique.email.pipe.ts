import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { UsersService } from 'src/ugc/users/users.service'

@Injectable()
export class UniqueEmailPipe implements PipeTransform {
  constructor(private users: UsersService) {}
  
  async transform(value: any, metadata: ArgumentMetadata) {
      const email = value => this.users.search({email: value}).then(list => list.length)
      if (await email(value) <= 0) return value
      else throw new BadRequestException()
  }
}
