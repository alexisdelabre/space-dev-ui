import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HomepageService {
  constructor(private http: HttpClient) { }

  public getConfig() {
    return this.http.get<any>('https://ll.thespacedevs.com/2.2.0/agencies/');
  }
}