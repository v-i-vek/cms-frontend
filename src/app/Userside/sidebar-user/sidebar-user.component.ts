import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageUserServiceService } from 'app/services/manageUserService.service';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/userdashboradhome', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/posts', title: 'post',  icon:'dashboard', class: '' },
    
];


@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.scss']
})

export class SidebarUserComponent implements OnInit {

  menuItems: any[];
  userId: string;
  userdata: any;
  constructor(public manageUserServiceService: ManageUserServiceService, public router: ActivatedRoute, private rout: Router) {
    this.getAllUserDetails();
  }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  getAllUserDetails() {
    this.userId =localStorage.getItem('tokenId');
    this.manageUserServiceService.getsingleUser(this.userId).subscribe((res: any) => {
      this.userdata = res
      console.log(this.userdata)
    })
  }

}
