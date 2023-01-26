import { Request, Response } from "express"
import { ListPostsAscService } from "../../services/post/ListPostsAscService"


class ListPostsAscController{
    async handle(req: Request, res: Response){
        const listPosts = new ListPostsAscService();

        const post = await listPosts.excutee();

        return res.json(post)
    }
}

export {ListPostsAscController}