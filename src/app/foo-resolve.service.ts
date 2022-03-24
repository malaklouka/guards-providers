import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const APIKEY = "e8067b53";

@Injectable({
  providedIn: 'root'
})
export class FooResolveService implements Resolve<any>{

  constructor(
    private httpClient:HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot){
    let imbdid = route.paramMap.get('imbdid');

    return this.httpClient.get('http://www.omdbapi.com/?i='+imbdid+'&apikey='+APIKEY);
  }
}
