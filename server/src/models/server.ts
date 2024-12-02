import express, { Application, Request, Response} from 'express';
import routesPaciente from '../routes/paciente';
import db from '../db/connection';

class Server {
    private app: express.Application;
    private port: String;

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ${this.port}')
        })
    }

    routes() {
        this.app.get('/', (req:Request, res:Response) => {
            res.json({
                msg: 'API Working'
            })
        }) 
        this.app.use('/api/pacientes', routesPaciente)
    }

    midlewares() {
        this.app.use(express.json());
    }

    async dbConect(){
        await db.authenticate();
        console.log('Base de datos conectada');
    }


}

export default Server;
