import {Inject, Injectable, forwardRef, ExceptionHandler, WrappedException} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ErrorReport} from './raygun-angular2/ErrorReport';

@Injectable()
export class RaygunExceptionHandler extends ExceptionHandler {
    static apiKey: string;
    static noop: boolean = false;
    static version: string;
    static username: string = '';

    errorReport: ErrorReport;

    constructor(private http: Http) {
        super(null);
    }

    static setUser(name: string) {
        this.username = name;
    }

    call(error: WrappedException) {
        // var headers = new Headers({
        //     'X-ApiKey': RaygunExceptionHandler.apiKey
        // });
        var originalException = error.originalException || error;

        if (!RaygunExceptionHandler.noop) {
            this.errorReport = new ErrorReport(error);

            this.http.post(`https://api.raygun.io/entries?apikey=${RaygunExceptionHandler.apiKey}`, JSON.stringify(this.errorReport, (key, val) => {
                if (key.indexOf('_') === 0) {
                    return undefined;
                }

                return val;
            })).subscribe();
        }

        throw originalException;
    }
}