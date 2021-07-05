import express, { Application } from "express";
import * as userRoutes from '../routes/users';
import cors from 'cors';

class Server {

    private app: Application;
    private port : string ;
    private apiPaths = {
        users: '/api/users',

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'; 
        this.middlewares();
        this.routes();
    }

    middlewares() {
        //Cors
        this.app.use(cors());
        // Lect Body
        this.app.use(express.json());
        //public folder
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use( this.apiPaths.users, userRoutes.default)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        })
    }
}

export default Server;