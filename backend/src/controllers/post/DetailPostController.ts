import { Request, Response } from "express";
import { DetailPostService } from "../../services/post/DetailPostService";

class DetailPostController {
    async handle(req: Request, res: Response){
        const post_id = req.query.post_id as string;

        const detailPostService = new DetailPostService();

        const user = await detailPostService.execute({
            post_id
        })

        return res.json(user);
    }
}

export {DetailPostController}