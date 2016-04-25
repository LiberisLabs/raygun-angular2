export class Request {
  hostName: string;
  url: string;
  httpMethod: string;
  ipAddress: string;
  queryString: { [key: string] : any };
  form: { [key: string] : any };
  headers: { [key: string] : any };
  rawData: string;
}