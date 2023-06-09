import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-exp',
  templateUrl: './nav-exp.component.html',
  styleUrls: ['./nav-exp.component.scss']
})
export class NavExpComponent {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

}
