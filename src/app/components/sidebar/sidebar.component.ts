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
    { path: '/material', title: 'Material',  icon:'content_paste', class: '' },
    { path: '/servicemanage', title: 'Service',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Role-manegement',  icon:'bubble_chart', class: '' },
    { path: '/usermanage', title: 'Manage-user',  icon:'location_on', class: '' },
    { path: '/sitemanage', title: 'Sites',  icon:'notifications', class: '' },
    { path: '/contactDetail', title: 'Contact Enquiry',  icon:'person', class: '' },
    { path: '/logout', title: 'Logout',  icon:'unarchive', class: 'active-pro' },
    
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
