declare module 'ClientTypes' {
    namespace client{

        interface clientOptions  {
            mongoURL?: string | undefined,
        }
    
        interface expressOptions  {
            port: number | undefined,
            routePath: string | undefined,
            options?: any[] | undefined,
        
        }
    }

    namespace request{

        type RequestType = {
            path: string;
            method: 'get' | 'post' | 'put' | 'delete' | 'all';
            run: (req: Request,res: Response) => any;
            
        }
    }
}
