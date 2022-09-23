import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPlaylistFromApiService {

  // base url for getting list of trailers
  configUrlApi = 'https://api-uat.greatmanagerinstitute.com/task/getTrailerList';

  constructor(private http: HttpClient) { }

  // send http resquest to api using get method
  getTrailerListFromApi() {
    return this.http.get(this.configUrlApi);
  }

}
