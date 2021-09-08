import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes';

import './database';

class App {
    constructor() {
        this.server = express();
        this.middlawares();
        this.routes();
    }

    middlawares() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(router);
    }
}

export default new App().server;
