
import mongoose from "mongoose";
import  colors from "colors";
import { Router } from "express";
import {glob} from 'glob'
import {promisify} from 'util'
const globPromise =  promisify(glob);
import express from "express";
import {client,request} from "ClientTypes"
import {terminal} from './terminal' 
export class Client {
    router : express.Router = Router();
    public app : express.Application = express(); 
    constructor(options:client.clientOptions) {
        this.readyMessage();
        this.getRequests();
        if(!options.mongoURL) return;
        this.mongoDbConnect(options.mongoURL);


    }
    private readyMessage() {
        console.log(`${colors.bold(`💻[client]:`)}`+ ` Ready!`)
        
    }
    

    private async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }
    private async getRequests() {
        const files = await globPromise(
            `${__dirname}/../api/*/*.ts`
        )
        files.forEach(async file =>{
            // console.log(file)
            let command: request.RequestType = await this.importFile(file);
            terminal.api(`Registering ${command.path} with method ${command.method}`);
            switch (command.method) {
                case 'get':
                    this.router.get(command.path,command.run)
                    break;
                case 'post':
                    this.router.post(command.path,command.run);
                case 'put':
                    this.router.put(command.path,command.run);
                case 'delete':
                    this.router.delete(command.path,command.run);
                case 'all':
                    this.router.all(command.path,command.run);
                default:
                    break;
            }
            
        })
    }

    private mongoDbConnect(url: string) {
        
        mongoose.connect(url ?? '', { keepAlive: true, keepAliveInitialDelay: 300000 });

        mongoose.connection.on('connected', () => {
            terminal.database('Mongoose connection established');
        });
        
    
        mongoose.connection.on('disconnected', () => {
            terminal.database('Mongoose connection disconnected');
        });
        
                
        mongoose.connection.on('error', (err) => {
            terminal.database('Mongoose connection error: ' + err);
            process.exit(1)
        })
    }
    
    public startExpressServer(options:client.expressOptions):void{
        this.app.use(options.routePath,this.router)
        // Array.from(options.options).forEach(option => {
        //     this.app.use(option)
        // })
        this.app.listen(options.port, () => {
            terminal.server(`Server is running at http://localhost:${options.port}`);
        });

    }

}




// export class terminal extends Client{}

