
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PingService {

    private baseUrl: string = 'api/ping';

    constructor(private http: Http) {
    }

    public ping(): Observable<string> {

        return this.http.get(this.baseUrl)
            .map((res: Response) => <any>res.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }

    //for use when using promises
    private handleErrorForPromise(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private getHeaders(): Headers {
        return new Headers({ 'Content-Type': 'application/json' });
    }

}
