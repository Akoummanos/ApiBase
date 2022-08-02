
import  colors from "colors";
import { Router } from "express";
import express from "express";
import {client,request} from "../typings/client"
import {terminal} from './terminal'
import {registerFiles,mongoDbConnect} from "../functions/functions";

export class Client {
    router : express.Router = Router();
    public app : express.Application = express();


    constructor(options:client.clientOptions) {
        console.log(`${colors.bold(`💻[client]:`)}`+ ` Ready!`)
        this.startExpressServer(options.startServer,options.ServerConfiguration)
        if(!options.mongoURL) console.log(`${colors.bold(`💻[client]:`)}`+ ` MongoDB URL is not defined`)
        mongoDbConnect(options.mongoURL);

        
    }

    
    private startExpressServer(startServer:Boolean,options:client.expressOptions):void{
        if(!startServer) return console.log(`${colors.bold(`💻[client]:`)}`+ ` Express server is not started`)
        this.app.use(options.routePath  ?? '/',this.router)
        registerFiles(this.router)
        Array.from(options.options).forEach(option => {
            this.app.use(option)
        })
        this.app.listen(options.port, () => {
            terminal.server(`Server is running at http://localhost:${options.port}`);
        });

    }

}




// export class terminal extends Client{}

