import { RequestUser } from "../request-user.model";

export class RequestListDTO{
    id: number;
    title: string;
    content: string;
    senderUserName: string;
    createDate: Date;
    isClosed: boolean;
    category: string;
    priority: string;
    requestUsers:RequestUser[]=[];
}