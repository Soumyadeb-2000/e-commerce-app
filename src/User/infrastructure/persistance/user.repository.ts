import { UserDomain } from "src/User/domain/user.domain";
import { User } from "./relational/entity/user.entity";

export abstract class UserRepository {
    abstract create(data: UserDomain): Promise<UserDomain>;
    abstract findByEmail(data: string): Promise<UserDomain | null>;
}