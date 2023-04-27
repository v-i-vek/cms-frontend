import { ActivatedRoute, Router } from '@angular/router';
import { ManageUserServiceService } from './../../../services/manageUserService.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { param } from 'jquery';
import { log } from 'console';
import { setTimeout } from 'timers/promises';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.scss']
})
export class ProfileuserComponent implements OnInit {
  userId: string;
  userdata: any;
  mapped: any;
  UserArray: string[][] = [];
  Object = Object;
  userstringdatat :any;
  constructor(public manageUserServiceService: ManageUserServiceService, public router: ActivatedRoute, private rout: Router) {
    this.getAllUserDetails();
  }

  ngOnInit() {
    // this.getAllUserDetails();
  }
  getAllUserDetails() {
    this.userId =localStorage.getItem('tokenId');
    this.manageUserServiceService.getsingleUser(this.userId).subscribe((res: any) => {
      this.userdata = res
      console.log(this.userdata)
    })
  }
  OnEdit(){
    this.rout.navigate(['/Edit']); 
  }

}
