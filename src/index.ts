require('dotenv').config()
// import  express  from "express";
import express from "express";
import morgan from "morgan";
import {Client} from "./structures/client";
const client = new Client({
    mongoURL:process.env.MONGOOSE_URL
});
client.startExpressServer({
    port:Number(process.env.PORT),
    routePath:process.env.ROUTE_PATH,
    options:[
        morgan("dev"),
        express.json(),
        express.urlencoded({extended:true}),
        express.static(`${__dirname}/src/public`)
    ]
});
export default client;

//init telegram bot
// import {telegram} from "./lib/telegram";
// telegram()



