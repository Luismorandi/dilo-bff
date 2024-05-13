import { Request, Response } from "express";
import { ShowPostUserCase } from "../../application/show-post.UserCase";


export class PostController{
    constructor(private postService: ShowPostUserCase){
    }

    public getPosts= async (_req:Request, res: Response)=>{
        const posts = await this.postService.getPosts();
        res.send(posts)  
 }
}
