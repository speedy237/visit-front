import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exposant } from '../classes/exposant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExposantService {

  constructor(private http:HttpClient) { }

  addExposant(exposant:Exposant):void{
    let config=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    this.http.post<Exposant>("http://localhost:8080/exposants",JSON.stringify(exposant),{headers:config}).subscribe(data=>{
      console.log(data);
    })

  }
}
