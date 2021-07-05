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


