import { ShowPostUserCase } from "../application/show-post.UserCase";
import { PostController } from "../infraestructure/controller/post.controller";
import { PostGateway } from "../infraestructure/repository/gateways/post-api";
import dotenv from 'dotenv';
import { AxiosHTTPClient } from "../../commons/http/axios-http-client";

dotenv.config();

const POST_API_URL = `${process.env.API_POST_URL}`
const axiosHttp = new AxiosHTTPClient()

export const setupPost = () => {
    const postRepository = new PostGateway(POST_API_URL,axiosHttp); // Reemplaza MongoRepository con tu repositorio real
    const postUserCase = new ShowPostUserCase(postRepository); // Reemplaza PostUserCase con tu caso de uso real
    return new PostController(postUserCase); // Reemplaza PostController con tu controlador real
};
