import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient ) { }

  getCardList(
    ordering:string,
    search?:string
  ): Observable<APIResponse<Card>>{
    let params = new HttpParams().set('ordering', ordering)

    if(search){
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Card>>(`${environment.databaseUrl}/cards`,{
      params: params,
    });

  }
}
