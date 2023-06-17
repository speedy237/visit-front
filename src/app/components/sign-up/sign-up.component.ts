import { Component } from '@angular/core';
import { Exposant } from 'src/app/classes/exposant';
import { Stand } from 'src/app/classes/stand';
import { Users } from 'src/app/classes/users';
import { ExposantService } from 'src/app/services/exposant.service';
import { StandService } from 'src/app/services/stand.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user:Users=new Users(); 
  stand:Stand=new Stand();
  exposant:Exposant=new Exposant();

  constructor(private exposantService:ExposantService,private standService:StandService,private userService:UserService){}

    async create(){
      console.log("debut ")
      console.log(this.exposant);
      await this.exposantService.addExposant(this.exposant);
      console.log("get exposant")
         this.userService.authentification(this.exposant.email,this.exposant.paswword).subscribe(data=>{
         console.log("authentification");
         this.user=data;
         this.savedStand(data.id,this.stand);
      })
     
  }

  savedStand(id:number,stand:Stand){

    console.log(this.stand);
    console.log(this.stand);
    this.standService.addStand(stand,id);

  }


}
