import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { RelationalUserRepository } from './repository/user.repository';
import { UserRepository } from '../user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: RelationalUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class RelationalBillFetchPersistenceModule {}
