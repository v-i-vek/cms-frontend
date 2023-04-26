import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
