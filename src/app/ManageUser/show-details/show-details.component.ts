import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUserComponent } from '../addUser/addUser.component';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any) { 
   console.log(this.editData)
  }

  ngOnInit(): void {
  }

}
