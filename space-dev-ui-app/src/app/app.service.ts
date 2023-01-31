import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  
  public getFiftyUpcomingLaunchs() {
    return this.http.get<any>(`https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=50`);
  }

  public getUpcomingLaunchById(id: string) {
    return this.http.get<any>('https://ll.thespacedevs.com/2.2.0/launch/upcoming/' + id + '/');
  }
}