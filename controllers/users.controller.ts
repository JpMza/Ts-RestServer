import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {

    const users = await User.findAll();
    res.json({
        users
    })
}


export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const user = await User.findByPk(Number(id));
    if (user) {
        res.json({
            user
        })
    } else {
        res.status(400).json({ msg: 'no existe el usuario' })
    }
}


export const postUser = (req: Request, res: Response) => {

    const { body } = req;
    console.log(req);

    res.json({
        msg: 'post ususarios',
        body
    })
}


export const putUsers = (req: Request, res: Response) => {

    const { id } = req.params;
    console.log(id);
    const { body } = req;
    console.log(body);

    res.json({
        msg: 'put ususarios',
        body,
        id
    })
}


export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'delete ususarios',
        id
    })
}


