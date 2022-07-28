import  colors from "colors";
import {Request,Response} from "express";
export namespace terminal {
    export function api(message:any): void {
        console.log(`${colors.bold(`📡[api]:`)}`+ ` ${message}`);
    }

    export function server(message:any): void {
        console.log(`${colors.bold(`⚡️[server]:`)}`+ ` ${message}`);
    }

    export function database(message:any): void {
        console.log(`${colors.bold(`💾[database]:`)}`+ ` ${message}`);
    }

    export function debug(message:any): void {
        console.log(`${colors.bold(`🛠[debug]:`)}`+ ` ${message}`);
    }

    export function connect(request:Request, response:Response): void {
        console.log(`${colors.bold(`🔌[connect]:`)} Connection established at`+ ` ${colors.italic.underline(`${new Date()}`)}`+  ` from`+ ` ${colors.italic.underline(`${request.ip}`)}` + ` at route ${colors.italic.underline(`${request.originalUrl}`)}`);
    }

    export function error(message:any): void {
        console.log(`${colors.bold(`🛑[error]:`)}`+ ` ${message}`);
    }


        
    
}

// since all started with this, i had to let it. It's a namespace that have functions for printing messages to the console

