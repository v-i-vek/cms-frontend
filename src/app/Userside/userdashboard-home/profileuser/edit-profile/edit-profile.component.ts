import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageUserServiceService } from 'app/services/manageUserService.service';




@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  selectedGender!: string;
  genders: string[] = ["Male", "Female"];
  userId: any;
  userdata: any;
  userstringdatat: any;
  mapped: any[];
  UpdateformGroup: any;
  constructor(private fb: FormBuilder,
    public manageUserServiceService: ManageUserServiceService,
    private router: ActivatedRoute, private rout: Router) {
    this.UpdateformGroup = fb.group(
      {
        name: [''],
        email: [''],
        gender: [''],
        address: [''],
        country: [''],
        state: [''],
        city: [''],
        pinCode: ['']
      }
    )
  }

  ngOnInit() {
    this.userId =localStorage.getItem('tokenId');
      this.getsingledatauser()
  }


  getsingledatauser() {

    this.manageUserServiceService.getsingleUser(this.userId).subscribe({
      next: (res: any) => {
        this.userdata = res
        // console.log(">>>>>>>>>>>>>>>cxvxcv", this.userdata)
        // this.mapped = Object.keys(this.userdata).map(key => (this.userdata));
        // console.log('object :>> ', this.mapped);

        this.UpdateformGroup.controls["name"].setValue(this.userdata.name);
        this.UpdateformGroup.controls["email"].setValue(this.userdata.email);
        this.UpdateformGroup.controls["address"].setValue(this.userdata.address);
        this.UpdateformGroup.controls["country"].setValue(this.userdata.country);
        this.UpdateformGroup.controls["state"].setValue(this.userdata.state);
        this.UpdateformGroup.controls["city"].setValue(this.userdata.city);
        this.UpdateformGroup.controls["city"].setValue(this.userdata.pinCode);
      },
      error: (e) => console.log('error :>> ', e)

    })
  }

  OnUpdate() {
console.log( "hoon asjfosajfo" );
    this.userstringdatat = JSON.stringify(this.userId);
    this.manageUserServiceService.updateUser(this.userId,this.UpdateformGroup.value).subscribe({
      next: (res: any) => {
        console.log(res)
        this.rout.navigate(['/profile']);
      },
      error: (e) => console.log('error :>> ', e)

    })
  }


}
