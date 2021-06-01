import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'http://api.openweathermap.org/data/2.5/weather?q=londres&appid=';
  key = 'b042ac5551457c4e1107883c6eab0c0f';

  constructor(private http: HttpClient) { 
  }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + this.key + '&q' + ciudad;
    return this.http.get(URL);
  }
}
