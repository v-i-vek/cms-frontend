import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-user-dashborad',
  templateUrl: './user-dashborad.component.html',
  styleUrls: ['./user-dashborad.component.scss']
})
export class UserDashboradComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer:BreakpointObserver) {

   }
  ngAfterViewInit():void {
   this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
    if(res.matches){
      this.sidenav.mode = 'over'
      this.sidenav.close();
    }
    else{
      this.sidenav.mode='side';
      this.sidenav.open();
    }
   })
  }

  ngOnInit(): void {
  }

}
