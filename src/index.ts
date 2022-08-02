require('dotenv').config()
// import  express  from "express";
import express from "express";
import path from "path";
import morgan from "morgan";
import {Client} from "./structures/client";
const client = new Client({
    mongoURL:process.env.MONGOOSE_URL,
    startServer:true,
    ServerConfiguration:{
        apiFolder:path.join(__dirname, '/src/../api/*/*.ts'),
        port:Number(process.env.PORT),
        routePath:String(process.env.ROUTE_PATH),
        options:[
            morgan("dev"),
            express.json(),
            express.urlencoded({extended:true}),
        ]
    }
});
export default client;

//init telegram bot
// import {telegram} from "./lib/telegram";
// telegram()



// path.join(__dirname, '/../api/*/*.ts')