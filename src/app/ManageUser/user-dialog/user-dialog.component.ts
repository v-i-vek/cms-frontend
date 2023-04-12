import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validator,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ManageUserServiceService } from 'app/services/manage-user-service.service';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  constructor(private http : ManageUserServiceService ) { }

AddUser = new FormGroup({
  userName:new FormControl(''),
  email:new FormControl('')
});

  ngOnInit(): void {
  }
  
  userAdd(data:any){

    this.http.AddUser(data).subscribe({
      next:(res)=>{
        alert("user Added Successfully")
        console.log(res)
      },
      error:(e)=>{
        alert("failed to add user")
        console.log(e)
      }
    },
    
    
    );

  }
}
