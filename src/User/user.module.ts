import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RelationalBillFetchPersistenceModule } from './infrastructure/persistance/relational/relational-persistance.module';
import { UserRepository } from './infrastructure/persistance/user.repository';

@Module({
  imports: [RelationalBillFetchPersistenceModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [RelationalBillFetchPersistenceModule]
})
export class UserModule {}
