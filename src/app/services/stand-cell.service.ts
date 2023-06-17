import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandCell } from '../classes/stand-cell';

@Injectable({
  providedIn: 'root'
})
export class StandCellService {

  url!:string;

  constructor(private http:HttpClient) { }

  public addStandCell(id:number,standCell:StandCell){
    this.url="http://localhost:8080/stand/"+id+"/stand-cell";
    this.http.post(this.url,standCell).subscribe(data=>{
      console.log(data);
    })
  }
}
