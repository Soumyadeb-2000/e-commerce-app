import { UserDomain } from "src/User/domain/user.domain";
import { User } from "../entity/user.entity";

export class UserMapper {
    public static toDomain(raw: User): UserDomain {
        const obj = new UserDomain();
        obj.name = raw.name;
        obj.email = raw.email;
        obj.phone = raw.phone;
        obj.password = raw.password;
        obj.isActive = raw.isActive;
        return obj;
    }

    public static toPersistance(domainObj: UserDomain): User {
        const user = new User();
        user.name = domainObj.name;
        user.email = domainObj.email;
        user.phone = domainObj.phone;
        user.password = domainObj.password;
        user.isActive = domainObj.isActive;
        return user;
    }
}