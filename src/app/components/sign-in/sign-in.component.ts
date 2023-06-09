import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/classes/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user:Users=new Users();
  userL:Users=new Users();
  errorMessage!:string;
  constructor(private userService:UserService, private router: Router){}
  ngOnInit():void{

  }

  public login():void{

    this.userService.authentification(this.user.email).subscribe(data=>{
      console.log(data);
      this.userL=data;
      if(this.userL.email==this.user.email && this.userL.password==this.user.password){
        console.log("authentification successfull completed");
          
        this.userService.getExposant(this.userL.id).subscribe(data=>{
          

          if(data!=null){
            this.router.navigateByUrl("/home-exposant");
          }
          
        })

        this.userService.getVisitor(this.userL.id).subscribe(data=>{
          
          if(data!=null){

            this.router.navigateByUrl("/home-visitor");

          }
        })
        
      }
      else {
        this.errorMessage="Login or Password Incorrect";
      }
  
    })
    
  }

}
