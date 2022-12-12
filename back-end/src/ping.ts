import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { JWT_SECRET } from "./utils/constants";
import  Express from "express";

const router = Express.Router();

router.get('/', (req: Request, res: Response) => {
  const token = req.headers.authorization as string;
  Jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ error: 'Invalid token' });
    } else {
      res.status(200).send({ success: true });
    }
  });
});

export default router;
