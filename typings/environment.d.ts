declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGOOSE_URL: string ;
            TELEGRAM_TOKEN_BOT: string;
            PORT: number ;
            ROUTE_PATH: string;
        }
    }
}
export {}