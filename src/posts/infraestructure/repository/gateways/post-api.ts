import { IHttpClient } from "../../../../commons/http/http-interface";
import { PostEntity } from "../../../domain/posts.entity";
import { EnumUrlsApi } from "./enum.post-api";
import { IPostGateway } from "./interfaces-post-api";


export class PostGateway implements IPostGateway {
    constructor(private postApiUrl: string, private httpClient: IHttpClient){
        this.postApiUrl = postApiUrl;
        this.httpClient = httpClient;
    }

   async getPosts(): Promise<PostEntity[]> {
    try{
        console.log(`${this.postApiUrl}${EnumUrlsApi.GET_POSTS}`)
        const posts = await this.httpClient.get(`${this.postApiUrl}${EnumUrlsApi.GET_POSTS}`)
        return posts
    }catch(err){
        throw err
    }


        }
    
}