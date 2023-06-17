import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exposant } from '../classes/exposant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExposantService {

  constructor(private http:HttpClient) { }

   async addExposant(exposant:Exposant){

    console.log("add exposant"); 
    console.log(exposant.paswword);

    try{
      const data= await this.http.post("http://localhost:8080/exposants",exposant).toPromise() 
      console.log(data);

    }
    catch{
      console.log("oula")

    }
   

  }

  
}
