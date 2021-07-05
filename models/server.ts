import express, { Application } from "express";
import * as userRoutes from '../routes/users';

class Server {

    private app: Application;
    private port : string ;
    private apiPaths = {
        users: '/api/users',

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.routes();
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