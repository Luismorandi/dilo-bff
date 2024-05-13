import { PostEntity } from "./posts.entity";

export interface PostRepository{
    getPosts(): Promise<PostEntity[]>
}