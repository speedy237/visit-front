import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public authentification(email:string):Observable<any>{
    return this.http.get("http://localhost:8080/api/user?email="+email);
  }

  public getExposant(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/exposants/"+id);

  }

  public getVisitor(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/visitors/"+id);

  }
  
}
