import { Branch } from "./branch.model";
import { User } from "./user.model";


export class UserBranch {
    id: number;
    userId: number;
    user: User = new User();
    branchId: number;
    branch: Branch = new Branch();
}