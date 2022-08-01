import mongoose from "mongoose";
import {terminal} from "../structures/terminal"

export function mongoDbConnect(url: string) {
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