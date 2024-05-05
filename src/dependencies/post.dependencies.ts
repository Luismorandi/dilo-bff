import { PostUserCase } from "../posts/application/post.UserCase";
import { PostController } from "../posts/infraestructure/controller/post.controller";
import { MongoRepository } from "../posts/infraestructure/repository/mongo.respository";

export const setupPost = () => {
    const postRepository = new MongoRepository(); // Reemplaza MongoRepository con tu repositorio real
    const postUserCase = new PostUserCase(postRepository); // Reemplaza PostUserCase con tu caso de uso real
    return new PostController(postUserCase); // Reemplaza PostController con tu controlador real
};
