import { Component, Inject, OnInit } from "@angular/core";
import {
  FormGroup,
  Validator,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ManageUserServiceService } from "app/services/manage-user-service.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { alertcenter } from "googleapis/build/src/apis/alertcenter";
@Component({
  selector: "app-user-dialog",
  templateUrl: "./user-dialog.component.html",
  styleUrls: ["./user-dialog.component.scss"],
})
export class UserDialogComponent implements OnInit {
  constructor(
    private http: ManageUserServiceService,
    private dialogref: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  customBtn: String = "save";

  AddUser = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
  });

  ngOnInit(): void {
    console.log("editData", this.editData);

    if (this.editData) {
      console.log("hello coming here");

      this.customBtn = "update";
      let edifFd = new FormData();

      this.AddUser.controls["name"].setValue(this.editData.name);
      this.AddUser.controls["email"].setValue(this.editData.email);
    }
  }

  userAdd(data: any) {

    if(!this.editData){
    console.log(data);
    this.http.AddUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.dialogref.close("save");
        alert("user Added Successfully");
      },
      error: (e) => {
        this.dialogref.close("cancel");
        alert("failed to add user");
        console.log(e);
      },
    });
  }
  else{
    this.editUserData()
  }
  }

  editUserData(){
    this.http.updateUser(this.AddUser.value,this.editData._id).subscribe({
      next:(res)=>{
        alert('User Updated successfully')
        this.dialogref.close('save')
      },
      error:(e)=>{
        alert("something went wrong,unable to update user")
        console.log(e)
        this.dialogref.close('cancel')
      }
    })
  }
}
