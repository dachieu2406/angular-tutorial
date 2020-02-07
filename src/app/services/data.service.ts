import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/error/app-error';
import { NotFoundError } from '../common/error/not-found-error';
import { BadRequestError } from '../common/error/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url).pipe();
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError))
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError))
  }

  private handleError(err: Response){
    if(err.status === 404)
      return throwError(new NotFoundError(err))
    if(err.status === 400)
        return throwError(new BadRequestError(err))
    return throwError(new AppError(err))
  }
}
