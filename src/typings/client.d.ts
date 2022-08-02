// import {Response,Request} from 'express';
import {
    Request,
    Response,
    NextFunction
} from 'express';

namespace client{
    
    interface expressOptions  {
        apiFolder?:string,
        port: number ,
        routePath: string | '/',
        options?: any[] ,

    }
    interface clientOptions  {
        mongoURL?: string ,
        startServer: Boolean,
        ServerConfiguration?: expressOptions
    }

}
namespace request{

    interface runParams{
        req: Request,
        res: Response,
        next?: NextFunction
    }
    type RequestType = {
        path: string;
        method: 'get' | 'post' | 'put' | 'delete' | 'all';
        run: (req: Request,res: Response) => any;

    }
}