import { Request, Response } from "express";
import { UpdatePostService } from "../../services/post/UpdatePostService";

class UpdatePostController {
    async handle(req: Request, res: Response){
        const {post_id, title, caption, description } = req.body;

        const updatePostService = new UpdatePostService();

        const post = await updatePostService.execute({
            post_id,
            title,
            caption,
            description
        });

        return res.json(post);
    }
}

export {UpdatePostController}