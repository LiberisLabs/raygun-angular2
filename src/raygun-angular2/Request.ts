export class Request {
    hostName = window.location.origin;
    url = window.location.href;
    httpMethod: string;
    ipAddress: string;
    queryString: { [key: string]: any } = this.buildQueryString();
    form: { [key: string]: any };
    headers: { [key: string]: any };
    rawData: string;

    constructor() {}

    buildQueryString() {
        var query = {};
        window.location.search.substr(1).split('&').forEach(q => {
            var parts = q.split('=');
            query[parts[0]] = parts[1];
        });
        
        return query;
    }
}