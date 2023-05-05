import { UserRepositoryImp } from './user-repository-imp';
import { CreateUserDto } from './dto/create-user-dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepositoryImp);
    save(user: CreateUserDto): Promise<string>;
}
