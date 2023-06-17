import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stand } from 'src/app/classes/stand';
import { StandCell } from 'src/app/classes/stand-cell';
import { StandCellService } from 'src/app/services/stand-cell.service';
import { StandService } from 'src/app/services/stand.service';

@Component({
  selector: 'app-typology',
  templateUrl: './typology.component.html',
  styleUrls: ['./typology.component.css']
})
export class TypologyComponent implements OnInit{
  sidebarExpanded = true;
  standcell!:StandCell;
  file!:any;
  stand!:Stand;
  id!:number;

  constructor( private standService: StandService,private standCellService:StandCellService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
     
    
  }

  onFileSelected(event: any) {

    this.file= <File>event.target.files[0];
    
    console.log(this.file.name);
    this.standcell.url=this.file.name;
  }

  addElement():void{
   this.standService.getStand(this.id).subscribe(data=>{
    this.stand=data;
    console.log(data);
    this.standCellService.addStandCell(data.id,this.standcell);
   })

  }

}
