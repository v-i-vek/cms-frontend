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
  //Gender: string;
  //GenderValue: string[] = ['Male', 'female'];
  userId: any;
  userdata: any;
  mapped: any[];
  UpdateformGroup: any;
  constructor(private fb: FormBuilder,
    public manageUserServiceService: ManageUserServiceService,
     private router: ActivatedRoute, private rout: Router) {
      this.UpdateformGroup = fb.group(
        { 
          address:new FormControl(''),
          country:new FormControl(''),
          state:new FormControl(''),
          city:new FormControl(''),
        }
      )
     }

  ngOnInit() {
    this.router.queryParams.subscribe(param => {
      this.userId = param.id;
     console.log(this.userId)
    })
console.log(this.userId);
    this.manageUserServiceService.getsingleUser(this.userId).subscribe({
      next:(res: any) => {
      this.userdata = res
      // console.log(">>>>>>>>>>>>>>>cxvxcv", this.userdata)
      // this.mapped = Object.keys(this.userdata).map(key => (this.userdata));
      // console.log('object :>> ', this.mapped);
      
      this.UpdateformGroup.controls["name"].setValue(this.userdata.name);
      this.UpdateformGroup.controls["email"].setValue(this.userdata.email);
      // this.UpdateformGroup.controls["address"].setValue(this.userdata.address);
      // this.UpdateformGroup.controls["country"].setValue(this.userdata.country);
      // this.UpdateformGroup.controls["state"].setValue(this.userdata.state);
      // this.UpdateformGroup.controls["city"].setValue(this.userdata.city);
      // this.UpdateformGroup.controls["city"].setValue(this.userdata.pinCode);
    },
    error:(e)=>console.log('error :>> ', e)
    
  })

  }

  OnUpdate(){
    console.log(this.userId)

   this.manageUserServiceService.updateUser(this.userId,this.UpdateformGroup.value).subscribe((res: any) => {
    console.log(">#################",res)
    //this.rout.navigate(['/profile'],{queryParams:{id:this.userId}}); 
   })
  }


}
