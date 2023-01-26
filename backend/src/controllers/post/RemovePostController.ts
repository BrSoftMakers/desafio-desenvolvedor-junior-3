import { Request, Response } from "express";
import { RemovePostService } from "../../services/post/RemovePostService";

class RemovePostController {
    async handle(req: Request, res: Response) {
        const post_id = req.query.post_id as string;

        const removePostService = new RemovePostService();

        const post = await removePostService.execute({
            post_id
        });

        return res.json(post);
    }
}

export { RemovePostController }