import {WrappedException} from 'angular2/core';
import {RaygunExceptionHandler} from '../RaygunExceptionHandler';
import {RaygunError} from './RaygunError';
import {UserEnvironment} from './UserEnvironment';
import {Request} from './Request';
import {User} from './User';

export class ErrorDetails {
  machineName: string;
  groupingKey: string;
  version = RaygunExceptionHandler.version;
  
  client: {
    name: 'Raygun for Angular2',
    version: '1.0.0',
    clientUrl: 'https://github.com/LiberisLabs/raygun-angular2'
  };
  
  error: RaygunError;
  environment: UserEnvironment;
  tags: Array<string>;
  userCustomData: { [key: string] : any };
  request: Request;
  user: User;
  
  constructor(error: WrappedException) {
    this.groupingKey = btoa(error.originalException.message);
    this.error = new RaygunError(error);
    this.environment = new UserEnvironment();
    this.request = new Request();
  }
}