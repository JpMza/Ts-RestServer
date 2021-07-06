import express, { Application } from "express";
import * as userRoutes from '../routes/users';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('Base de datos online');
            
        } catch (error) {
            throw new Error()
        }
    }

    middlewares() {
        //Cors
        this.app.use(cors());
        // Lect Body
        this.app.use(express.json());
        //public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes.default)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        })
    }
}

export default Server;