import { PostEntity, PostEntityDT0 } from "./posts.entity";
import { v4  as uuid} from "uuid";


export class PostValue implements PostEntity{
    content: string;
    user: string;
    token: string;
    uuid: string;

    constructor({content, user, token}:PostEntityDT0){
        this.uuid = uuid(),
        this.content = content,
        this.user = user,
        this.token = token
    }

}