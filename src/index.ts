require('dotenv').config()
// import  express  from "express";
import express from "express";
import morgan from "morgan";
import {Client} from "./structures/client";
const client = new Client({
    mongoURL:process.env.MONGOOSE_URL,
    startServer:true,
    ServerConfiguration:{
        port:Number(process.env.PORT),
        routePath:String(process.env.ROUTE_PATH),
        options:[
            // morgan("dev"),
            express.json(),
            express.urlencoded({extended:true}),
        ]
    }
});
client.app.use(morgan("dev"));
export default client;

//init telegram bot
// import {telegram} from "./lib/telegram";
// telegram()



