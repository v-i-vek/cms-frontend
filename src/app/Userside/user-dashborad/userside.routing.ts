import { Routes } from '@angular/router';
import { PostsComponent } from '../userdashboard-home/posts/posts.component';
import { UserdashboardHomeComponent } from '../userdashboard-home/userdashboard-home.component';
import { ProfileuserComponent } from '../userdashboard-home/profileuser/profileuser.component';
import { EditProfileComponent } from '../userdashboard-home/profileuser/edit-profile/edit-profile.component';
import { LogoutComponent } from 'app/logout/logout.component';
import { LogoutUserComponent } from '../userdashboard-home/logout-user/logout-user.component';
import { UserservicesComponent } from '../userdashboard-home/userservices/userservices.component';



export const userLayoutRoutes: Routes = [
    {path:'userdashboradhome', component:UserdashboardHomeComponent},
    {path:'profile', component:ProfileuserComponent},
    {path:'Edit', component:EditProfileComponent},     
    {path:'propertydetails', component:PostsComponent},
    {path:'services', component:UserservicesComponent},
    {path:'logoutuser', component:LogoutUserComponent},
      
  
];
