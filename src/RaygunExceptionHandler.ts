import {Inject, Injectable, forwardRef, ExceptionHandler, WrappedException} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {ErrorReport} from './raygun-angular2/ErrorReport';

@Injectable()
export class RaygunExceptionHandler extends ExceptionHandler {
    static apiKey = 'AqvoYX11eWuVi0Te4cXswA==';
    errorReport: ErrorReport;
    
    constructor(private http: Http) {
        super(null);
    }
    
    call(error: WrappedException) {
        // var headers = new Headers({
        //     'X-ApiKey': RaygunExceptionHandler.apiKey
        // });
        
        this.errorReport = new ErrorReport(error);
        
        this.http.post(`https://api.raygun.io/entries?apikey=${RaygunExceptionHandler.apiKey}`, JSON.stringify(this.errorReport))
            .subscribe(console.warn.bind, console.warn.bind);
    }
}