import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUsers } from "../controllers/users.controller";


const router = Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', postUser);

router.put('/:id',putUsers);

router.delete('/:id', deleteUser);

export default router;
