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


export const postUser = async (req: Request, res: Response) => {

    const { body } = req;
    try {

        const mailExist = await User.findOne({
            where: {
                email: body.email
            }
        })
        if (mailExist) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email: ' + body.email
            })
        }
        const user = new (User as any)(body);
        await user.save()

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

    res.json({
        msg: 'post ususarios',
        body
    })
}


export const putUsers = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({
                msg: 'No existe el usuario con ID: ' + id
            })
        }

        await user.update(body)

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
    res.json({
        msg: 'put ususarios',
        body,
        id
    })
}


export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const user =await User.findByPk(id);

        if (!user) {
            return res.status(400).json({
                msg: 'No existe el usuario con ID: ' + id
            })
        }

        //await user.destroy()
        await user.update({active: false})
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
    res.json({
        msg: 'delete ususarios',
        id
    })
}


