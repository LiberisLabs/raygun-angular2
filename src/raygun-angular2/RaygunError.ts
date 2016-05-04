import {WrappedException} from '@angular/core';
import {StackTrace as RaygunStackTrace} from './StackTrace';
import * as StackTrace from 'stack-trace';

export class RaygunError {
  innerError: RaygunError;
  data: {[key: string]: any};
  className: string;
  message: string;
  stackTrace: Array<RaygunStackTrace>;
  
  constructor(err: WrappedException) {
    var traceException = err.originalException || err;
    var trace = StackTrace.parse(traceException);

    this.className = <string>traceException.name;
    this.message = <string>traceException.message;
    
    this.stackTrace = trace.map((trace) => {
      return {
        fileName: trace.getFileName(),
        lineNumber: trace.getLineNumber(),
        columnNumber: trace.getColumnNumber(),
        methodName: trace.getMethodName(),
        className: trace.getFunctionName()
      }
    });
  }
        
}