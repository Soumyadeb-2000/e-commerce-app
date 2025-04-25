import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm";
import { UserDomain } from "src/User/domain/user.domain";
import { UserMapper } from "../mapper/user.mapper";
import { UserRepository } from "../../user.repository";

export class RelationalUserRepository implements UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userEntity: Repository<User>
    ) {}

    public async create(data: UserDomain): Promise<UserDomain> {
        const persistanceModel = UserMapper.toPersistance(data);
        await this.userEntity.save(persistanceModel);
        return UserMapper.toDomain(persistanceModel);
    }

    public async findByEmail(email: string): Promise<UserDomain | null> {
        return await this.userEntity.findOne({where: {email}})
    }
}