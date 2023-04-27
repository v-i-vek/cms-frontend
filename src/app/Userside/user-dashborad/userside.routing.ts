import { Routes } from '@angular/router';
import { PostsComponent } from '../userdashboard-home/posts/posts.component';
import { UserdashboardHomeComponent } from '../userdashboard-home/userdashboard-home.component';

import { ProfileuserComponent } from '../userdashboard-home/profileuser/profileuser.component';
import { EditProfileComponent } from '../userdashboard-home/profileuser/edit-profile/edit-profile.component';



export const userLayoutRoutes: Routes = [
    {path:'userdashboradhome', component:UserdashboardHomeComponent},
    {path:'profile', component:ProfileuserComponent},
    {path:'Edit', component:EditProfileComponent},     
    {path:'posts', component:PostsComponent},
      
  
];
