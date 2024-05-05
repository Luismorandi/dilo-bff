import { Router } from "express";
import { setupPost } from "../../dependencies/post.dependencies";

const postRoute = Router()
const postController = setupPost()

postRoute.post('/post', postController.createPost)

export default postRoute