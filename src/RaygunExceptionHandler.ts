import {ExceptionHandler, WrappedException} from 'angular2/core';
import * as Raygun from 'raygun';

export class RaygunExceptionHandler extends ExceptionHandler {
    static apiKey = 'AqvoYX11eWuVi0Te4cXswA==';
    raygun: Raygun.Client;

    constructor() {
        super(null);
        this.raygun = new Raygun.Client().init({ apiKey: RaygunExceptionHandler.apiKey });
    }
    
    call(error: WrappedException) {
        this.raygun.send(error.originalException);
    }
}