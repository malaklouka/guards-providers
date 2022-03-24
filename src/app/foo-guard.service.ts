import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const APIKEY = "e8067b53";

@Injectable({
  providedIn: 'root'
})
export class FooGuardService implements CanActivate {


  constructor(
    private httpClient: HttpClient
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log("guard!");
    let imbdid = route.paramMap.get('imbdid');
    return this.httpClient.get('http://www.omdbapi.com/?i=' + imbdid + '&apikey=' + APIKEY).pipe(
      map(res => {
        if ((res as {[key: string]: any})['Error'] === 'Error') {
          alert("Movie not found at guard!");
          return false;
        } else {
          return true;
        }
      }),
      catchError((err) => {
        return of(false);
      })
    );

  }


}
