import { Routes } from '@angular/router';
import { PostsComponent } from '../userdashboard-home/posts/posts.component';
import { UserdashboardHomeComponent } from '../userdashboard-home/userdashboard-home.component';



export const userLayoutRoutes: Routes = [
    {path:'userdashboradhome', component:UserdashboardHomeComponent},
      {path:'posts', component:PostsComponent}
  
];
