import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repositories';
import { API_URL } from './repositories.config';

import { Observable } from 'rxjs/Observable';
import { tap, pluck, mergeMap } from 'rxjs/operators'
import { forkJoin } from 'rxjs/observable/forkJoin'
import { of } from 'rxjs/observable/of'


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

    getById(id): Observable<Repository> {
        return this._http.get(`${this._apiUrl}/${id}`)
    }

    private get(url): Observable<Repository[]> {
        return this._http
            .get(url,{ observe: 'response'})
            .pipe(
                tap(res => this._nextLink = this.parseHeaders(res)),
                pluck('body'),
                mergeMap(
                    (repos: Repository[]) => forkJoin(
                                repos.map(
                                (repo: Repository) => repo.fork ?
                                    this.getById(repo.id) :
                                    of(repo)
                                )
                            )
                )
            )

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
