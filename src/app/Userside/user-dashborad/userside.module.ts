import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { userLayoutRoutes } from './userside.routing';
import { UserDashboradComponent } from './user-dashborad.component';
import { UserdashboardHomeComponent } from '../userdashboard-home/userdashboard-home.component';
import { PostsComponent } from '../userdashboard-home/posts/posts.component';
import {MatCardModule} from '@angular/material/card';
import { ProfileuserComponent } from '../userdashboard-home/profileuser/profileuser.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { UserservicesComponent } from '../userdashboard-home/userservices/userservices.component';
import { EditProfileComponent } from '../userdashboard-home/profileuser/edit-profile/edit-profile.component';
import {MatRadioModule} from '@angular/material/radio';
import { LogoutUserComponent } from '../userdashboard-home/logout-user/logout-user.component';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule, POSITION } from 'ngx-ui-loader';
import { CustomRequestComponent } from '../userdashboard-home/userservices/custom-request/custom-request.component';
import { DocumentuploadComponent } from '../userdashboard-home/documentupload/documentupload.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
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
    HttpClientModule ,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatRadioModule,
    MatGridListModule
   
    
    
  ],
  declarations: [
   UserdashboardHomeComponent,
   PostsComponent,
   ProfileuserComponent,
   EditProfileComponent,
  LogoutUserComponent,
  UserservicesComponent,
  CustomRequestComponent,
  DocumentuploadComponent,
  
 
  ]
})

export class UsersideModule {}
