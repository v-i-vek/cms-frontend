import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { DialogSiteComponent } from './siteManagement/dialogSite/dialogSite.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddUserComponent } from './ManageUser/addUser/addUser.component';
import { UserDialogComponent } from './ManageUser/userDialog/userDialog.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DialogSerComponent } from './serviceManagement/dialogService/dialogService.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutsectionComponent } from './home-page/aboutsection/aboutsection.component';
import { ClientlogoSectionComponent } from './home-page/clientlogo-section/clientlogo-section.component';
import { ContactSectionComponent } from './home-page/contact-section/contact-section.component';
import { FooterSectionComponent } from './home-page/footer-section/footer-section.component';
import { HeaderSectionComponent } from './home-page/header-section/header-section.component';
import { ProjectsSectionComponent } from './home-page/projects-section/projects-section.component';
import { ReviewSectionComponent } from './home-page/review-section/review-section.component';
import { ServicesSectionComponent } from './home-page/services-section/services-section.component';
import { HomesilderComponent } from './home-page/homesilder/homesilder.component';
import { UserloginpageComponent } from './Userside/userloginpage/userloginpage.component';
import { UserDashboradComponent } from './Userside/user-dashborad/user-dashborad.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarUserComponent } from './Userside/sidebar-user/sidebar-user.component';

import { UserdashboardHomeComponent } from './Userside/userdashboard-home/userdashboard-home.component';
import { PostsComponent } from './Userside/userdashboard-home/posts/posts.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  
    
    AddUserComponent,
    UserDialogComponent,
    DialogSerComponent,
    DialogSiteComponent,
    LogoutComponent,
    SignInComponent,
    HomePageComponent,
    AboutsectionComponent,
    ClientlogoSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    HeaderSectionComponent,
    ProjectsSectionComponent,
    ReviewSectionComponent,
    ServicesSectionComponent,
    HomesilderComponent,
    UserloginpageComponent,
    UserDashboradComponent,
    SidebarUserComponent,
    UserdashboardHomeComponent,
    PostsComponent
    
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
