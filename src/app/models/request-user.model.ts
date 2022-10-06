import { Request } from "./request.model";
import { User } from "./user.model";


export class RequestUser {
    id: number;
    receiwerUserId: number;
    receiverUser: User = new User();
    requestId: number;
    request: Request = new Request();
    isApproved: boolean;
}