import { PostEntity } from "./posts.entity";


export class PostValue implements PostEntity{
    content: string;
    user: string;
    token: string;

    constructor({content, user, token}: PostEntity){
        this.content = content,
        this.user = user,
        this.token = token
    }

}