import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  public getFiftyUpcomingLaunchs(): Observable<any> {
    return this.http.get<any>(
      `https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=50`
    );
  }

  public getUpcomingLaunchById(id: string): Observable<any> {
    return this.http.get<any>(
      'https://ll.thespacedevs.com/2.2.0/launch/upcoming/' + id + '/'
    );
  }
}
