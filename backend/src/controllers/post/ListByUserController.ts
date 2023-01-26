import { Request, Response } from "express";
import { ListByUserService } from "../../services/post/ListByUserService";

class ListByUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.query.user_id as string;

        const listByUserService = new ListByUserService();

        const posts = await listByUserService.execute({
            user_id
        })

        return res.json(posts)
    }
}

export { ListByUserController }