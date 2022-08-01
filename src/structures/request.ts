
import {request} from '../typings/client';

export class Request {
    constructor(requestOptions: request.RequestType) {
        Object.assign(this, requestOptions);
        
    }
    
}
