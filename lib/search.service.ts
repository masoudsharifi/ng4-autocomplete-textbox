import { 
    Http,
    Headers,
    Response
  } from "@angular/http";
  import { Injectable } from '@angular/core';
  import { Observable } from "rxjs/Observable";
   
  @Injectable()
  export class SearchService {
    constructor(private _http: Http) { }
  
    getList(apiURI: string, searchParameterName: string, searchString: string) : Observable<Response>  {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
  
      const headerObj = {                                                                                                                                                                                 
          headers: new Headers(headerDict)
      };
  
      return this._http.get(
        apiURI + '?' + searchParameterName + '=' + searchString,
        headerObj);
    }
}
 