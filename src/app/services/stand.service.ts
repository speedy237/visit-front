import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stand } from '../classes/stand';

@Injectable({
  providedIn: 'root'
})
export class StandService {

  constructor(private http:HttpClient) { }

  addStand(stand:Stand,id:number):void{
    let config=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    this.http.post<Stand>("http://localhost:8080/exposants/"+id+"/stand",JSON.stringify(stand),{headers:config}).subscribe(data=>{
      console.log(data);
    })
  }

}
