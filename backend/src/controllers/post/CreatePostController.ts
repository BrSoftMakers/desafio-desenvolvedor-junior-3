import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";


class CreatePostController {
    async handle(req: Request, res: Response) {
        const { title, caption, description, author_id } = req.body;

        const createPostService = new CreatePostService();

        const post = await createPostService.execute({
            title,
            caption,
            description,
            author_id
        })

        return res.json(post);
    }

}

export { CreatePostController }