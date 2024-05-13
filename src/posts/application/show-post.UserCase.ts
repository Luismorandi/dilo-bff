import { PostRepository } from "../domain/post.repository";
import { PostEntity } from "../domain/posts.entity";

 export class ShowPostUserCase{
    constructor(private readonly postGateway: PostRepository){
    }

    public async getPosts(): Promise<PostEntity[]>{
        const post = await this.postGateway.getPosts();
        const showPost = post.map((e) => {
            return {
                user: e.user,
                content: e.content,
                token: e.token
            }
        })
        
        return showPost
    }
}

