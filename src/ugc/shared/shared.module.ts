import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { EncodeTextPipe } from './pipes/encode.text.pipe';
import { Password10Pipe } from './pipes/password.10.pipe';
import { UniqueEmailPipe } from './pipes/unique.email.pipe';
import { HashPipe } from './pipes/hash.pipe';

@Module({
    imports: [UsersModule],
    providers: [EncodeTextPipe, HashPipe, Password10Pipe, UniqueEmailPipe]
})
export class SharedModule {}
