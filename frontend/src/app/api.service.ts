import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    get() {
        return this.http.get('http://localhost:3000/')
        .pipe(
          map((res) => {
            console.log(res);
            return res;
          })
        );
    }
}
