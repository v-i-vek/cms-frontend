import { Component, OnInit } from '@angular/core';
import { ManageUserServiceService } from 'app/services/manageUserService.service';


@Component({
  selector: 'app-userservices',
  templateUrl: './userservices.component.html',
  styleUrls: ['./userservices.component.scss']
})
export class UserservicesComponent implements OnInit {
  userId:any
  userData:any

  constructor(private http: ManageUserServiceService) { 
    this.getUserData()
  }

  ngOnInit(): void {
  }
  getUserData(){
    this.userId = localStorage.getItem("tokenId")  
    this.http.getsingleUser(this.userId).subscribe({
      next:(res)=>{
        this.userData  = res;
        console.log(this.userData.name)
  
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }

}
