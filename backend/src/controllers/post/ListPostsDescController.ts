import { Request, Response } from "express"
import { ListPostsDescService } from "../../services/post/ListPostsDescService"


class ListPostsDescController{
    async handle(req: Request, res: Response){
        const listPosts = new ListPostsDescService();

        const post = await listPosts.excutee();

        return res.json(post)
    }
}

export {ListPostsDescController}