import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Material',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Service',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Role-manegement',  icon:'bubble_chart', class: '' },
     { path: '/manageuser', title: 'Manage-user',  icon:'group_add', class: '' },
    { path: '/notifications', title: 'Sites',  icon:'library_add', class: '' },
    { path: '/upgrade', title: 'Logout',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
