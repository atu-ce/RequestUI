import { User } from "./user.model";


export class UserHistory {
    id: number;
    RecordId: number;
    RecordName: string;
    description: string;
    transactionUserId: number;
    transactionUser: User = new User();
    module: number;
    logType: number;
    transactionDate: Date;
}