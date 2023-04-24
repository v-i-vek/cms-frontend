import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { siteComponent } from './siteManagement/site/site.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserDashboradComponent } from './Userside/user-dashborad/user-dashborad.component';
import { UserdashboardHomeComponent } from './Userside/userdashboard-home/userdashboard-home.component';
import { PostsComponent } from './Userside/userdashboard-home/posts/posts.component';
import { MaterialcmsComponent } from './Material/materialcms/materialcms.component';
import { UserloginpageComponent } from './Userside/userloginpage/userloginpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sitemanage',
    component: siteComponent,

  }, {

    path: 'home',
    component: HomePageComponent,

  },

  {

    path: 'login',
    component: SignInComponent,

  },

  {
    path: 'logout',
    component: LogoutComponent,
  }
  ,
  {
    path: 'userlogin',
    component: UserloginpageComponent,
  }
  // },

  // {
  //   path:'material',
  //   component:MaterialcmsComponent,
  // }
  ,
  // {
  //   path:'',
  //   component:UserDashboradComponent,
  //   path:''
  //   children:[
  //      path: '',
  //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  //   ]
  // },

  // {
  //   path: 'userdashboradhome',
  //   component: UserDashboradComponent,
  // },


  // {
  //   path: 'dashboard',
  //   component: AdminLayoutComponent
  // }


  {
    path: '',
    component: UserDashboradComponent,
    children: [{
      path: '',
      loadChildren: () => import('../app/Userside/user-dashborad/userside.module').then(m => m.UsersideModule)
    }]
  },
  {
    path:'',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('../app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
