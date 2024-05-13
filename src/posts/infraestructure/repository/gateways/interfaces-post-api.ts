import { PostEntity } from "../../../domain/posts.entity";

export interface IPostGateway{
    getPosts(): Promise<PostEntity[]>
}