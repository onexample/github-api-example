import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repositories';
import { API_URL } from './repositories.config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/do'


@Injectable()
export class RepositoryService {

    private _nextLink: string;

    constructor(

        @Inject(API_URL)
        private _apiUrl,

        private _http: HttpClient

    ) { }

    getAll(): Observable<Repository[]> {
        return this.get(this._apiUrl)
    }


    getNext(): Observable<Repository[]> {
        return this.get(this._nextLink)
    }


    private get(url): Observable<Repository[]> {
        return this._http
            .get(url,{ observe: 'response'})
            .do(res => this._nextLink = this.parseHeaders(res))
            .pluck('body')
    }


    private parseHeaders(response) {
        return response.headers
            .get('Link')
            .split(';')
            .shift()
            .replace(/<(.*)>/, '$1')
            .trim();
    }

}
