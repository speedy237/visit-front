import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exposant } from 'src/app/classes/exposant';
import { Users } from 'src/app/classes/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-exp',
  templateUrl: './nav-exp.component.html',
  styleUrls: ['./nav-exp.component.scss']
})
export class NavExpComponent implements OnInit {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  id!:number;
  user!:Exposant;
  constructor(private http:HttpClient, private route: ActivatedRoute, private userService: UserService){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getExposant(this.id).subscribe(data=>{
      this.user=data;
    })
    
  }

  

}
