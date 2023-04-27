import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { ManageUserServiceService } from 'app/services/manageUserService.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  userId:any
  userData:any

  constructor(private http:ManageUserServiceService) { 
    this.getUserData()
    // console.log("this is ",this.userData)
  }

  ngOnInit(): void {
    
  }

getUserData(){
  this.userId = localStorage.getItem("tokenId")  
  this.http.getsingleUser(this.userId).subscribe({
    next:(res)=>{
      this.userData  = res;
      console.log(this.userData.flatUserDetails[0].siteName.category)

    },
    error:(e)=>{
      console.log(e)
    }
  })
}

}
