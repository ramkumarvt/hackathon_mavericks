import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(
    private http: HttpClient
  ) { }

  getRooms(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>('http://localhost/Test/list.php').subscribe(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
