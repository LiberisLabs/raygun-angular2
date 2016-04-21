declare module raygun {
  class Client {
    init(options: InitializationOptions): Client;
    send(error: Error, customData?: CustomData, callback?: (response: any) => void, request?: any, tags?: Array<string>): void; 
  }
  
  interface InitializationOptions {
      apiKey: string;
      filters?: Array<string>;
  }
  
  interface CustomData {
      [key:string]: any;
  }
}

export = raygun;