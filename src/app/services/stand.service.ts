import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stand } from '../classes/stand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandService {

  url!:string

  constructor(private http:HttpClient) { }


  addStand(stand:Stand,id:number){
    console.log("save stand"); 
    console.log("id: "+id);
    this.url="http://localhost:8080/exposants/"+id+"/stand";
    console.log(this.url);
    this.http.post(this.url,stand).subscribe(data=>{
    
     console.log(data);
    })
  }

  getStand(id:number):Observable<any> {

    this.url="http://localhost:8080/exposants/"+id+"/stand";
    return this.http.get(this.url);

  }

}
