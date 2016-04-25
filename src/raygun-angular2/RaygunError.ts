import {WrappedException} from 'angular2/core';
import {StackTrace as RaygunStackTrace} from './StackTrace';
import * as StackTrace from 'stack-trace';

export class RaygunError {
  innerError: RaygunError;
  data: {[key: string]: any};
  className: string;
  message: string;
  stackTrace: Array<RaygunStackTrace>;
  
  constructor(err: WrappedException) {
    var trace = StackTrace.parse(err.originalException);

    this.className = <string>err.originalException.name;
    this.message = <string>err.originalException.message;
    
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