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

  create():void{
    console.log(this.exposant);
    this.exposantService.addExposant(this.exposant);
    this.userService.authentification(this.user.email).subscribe(data=>{
      this.user=data;
      console.log(data);
    })
    this.standService.addStand(this.stand,this.user.id);
  }


}
