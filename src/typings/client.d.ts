// import {Response,Request} from 'express';
import {
    Request,
    Response,
    NextFunction
} from 'express';

namespace client{
    
    interface expressOptions  {
        port: number | undefined,
        routePath: string | undefined,
        options?: any[] | undefined,

    }
    interface clientOptions  {
        mongoURL?: string | undefined,
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