import {WrappedException} from 'angular2/core';
import {ErrorDetails} from './ErrorDetails';

export class ErrorReport {
  occurredOn: string;
  details: ErrorDetails;
  
  constructor(error: WrappedException) {
    this.occurredOn = new Date().toISOString();
    this.details = new ErrorDetails(error);
  }
}