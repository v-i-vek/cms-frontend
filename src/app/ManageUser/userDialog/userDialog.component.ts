import { Component, Inject, OnInit } from "@angular/core";
import {
  FormGroup,
  Validator,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ManageUserServiceService } from "app/services/manageUserService.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { alertcenter } from "googleapis/build/src/apis/alertcenter";
import { SiteManageService } from "app/services/siteManage.service";
@Component({
  selector: "app-user-dialog",
  templateUrl: "./userDialog.component.html",
  styleUrls: ["./userDialog.component.scss"],
})
export class UserDialogComponent implements OnInit {

  
  getSiteData = this.editData.siteData
  siteId:any



  constructor(
    private http: ManageUserServiceService,
   
    private dialogref: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {

   
  } 


  customBtn: String = "save";

  AddUser = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    siteName:new FormControl("",[Validators.required]),
    flatNo :new FormControl ("",[Validators.required])
  });

  ngOnInit(): void {

    // for(let i = 0; i<this.getSiteData.length;i++){
    //  for(let j = 0; j<this.getSiteData[i].flatDetails.length;j++){
    //   console.log(this.getSiteData[i].flatDetails[j].flatNo)
    //  }
    // }
  
    

   // this.getSiteDetails()
    if (this.editData.row) {
      this.customBtn = "update";
      this.AddUser.controls["name"].setValue(this.editData.name);
      this.AddUser.controls["email"].setValue(this.editData.email);
      this.AddUser.controls["flatNo"].setValue(this.editData.flatNo);
      this.AddUser.controls["siteName"].setValue(this.editData.siteName)
    }
  
   
  }

  userAdd(data: any) {
    if (!this.editData.row) {
      this.http.AddUser(this.AddUser.value).subscribe({
        next: (res) => {
          this.dialogref.close("save");
          alert("user Added Successfully");
        },
        error: (e) => {
          this.dialogref.close("cancel");
          alert("failed to add user");
        },
      });
    } else {
      this.editUserData();
    }
  }


  editUserData() {
    this.http.updateUser(this.AddUser.value, this.editData._id).subscribe({
      next: (res) => {
        alert("User Updated successfully");
        this.dialogref.close("save");
      },
      error: (e) => {
        alert("something went wrong,unable to update user");

        this.dialogref.close("cancel");
      },
    });
  }
  
  selectSite(){
    for(let item of this.getSiteData){

    }
  }
  getFlatDetails($event){
    console.log($event.source.value)
   // this.siteId = e.target.
  }
  
  
}
