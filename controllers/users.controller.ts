import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {

    res.json({
        msg: 'get ususarios'
    })
}


export const getUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'get ususarios',
        id
    })
}


export const postUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'post ususarios',
        body
    })
}


export const putUsers = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

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


