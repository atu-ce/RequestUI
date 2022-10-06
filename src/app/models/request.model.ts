import { RequestUser } from "./request-user.model";
import { User } from "./user.model";

export class Request {
    id: number;
    title: string;
    content: string;
    senderUserId: number;
    senderUser: User = new User();
    createDate: Date;
    isClosed: boolean;
    category: number;
    priority: number;
    requestUsers: RequestUser[] = [];
}