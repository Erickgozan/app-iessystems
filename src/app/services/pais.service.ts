import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlEndPont:string = "https://api.first.org/data/v1/countries?region=africa&limit=10&pretty=true"

  constructor(private http:HttpClient) { }

  public paises():Observable<any>{
    return this.http.get<any>(this.urlEndPont).pipe(map(data=> data.data));
  }
}
