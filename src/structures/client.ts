
import mongoose from "mongoose";
import  colors from "colors";
import { Router } from "express";
import {glob} from 'glob'
import {promisify} from 'util'
const globPromise =  promisify(glob);
import express from "express";
// @ts-ignore
import {client,request} from "../typings/client"
import {terminal} from './terminal'
import {registerFiles,mongoDbConnect} from "../functions/functions";

export class Client {
    router : express.Router = Router();
    public app : express.Application = express();


    constructor(options:client.clientOptions) {
        console.log(`${colors.bold(`💻[client]:`)}`+ ` Ready!`)
        registerFiles(this.router)
        this.startExpressServer(options.ServerConfiguration)
        if(!options.mongoURL) return;
        mongoDbConnect(options.mongoURL);


    }

    
    private startExpressServer(options:client.expressOptions):void{
        this.app.use(options.routePath,this.router)
        // options.options.forEach(option =>{
        //     return this.app.use(option)
        // })
        Array.from(options.options).forEach(option => {
            this.app.use(option)
        })
        this.app.listen(options.port, () => {
            terminal.server(`Server is running at http://localhost:${options.port}`);
        });

    }

}




// export class terminal extends Client{}

