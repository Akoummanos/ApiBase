import {request} from 'ClientTypes';

export class Request {
    constructor(requestOptions: request.RequestType) {
        Object.assign(this, requestOptions);
        
    }
    
}
