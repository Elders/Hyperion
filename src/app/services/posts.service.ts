import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }

    getPosts(): Observable<Post[]>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
    getPost(id: number): Observable<Post> {
         return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .map(res => res.json());
    }
    // searchPosts(id: string): Observable<Post[]>{
    //     return this.http.get('https://jsonplaceholder.typicode.com/posts/', id)
    //     .map(res => res.json());
    // }   
}