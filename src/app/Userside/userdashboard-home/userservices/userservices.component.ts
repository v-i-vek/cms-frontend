import { Component, OnInit } from '@angular/core';
import { ManageUserServiceService } from 'app/services/manageUserService.service';
import { Router } from '@angular/router';
import { SerServiceService } from 'app/services/serService.service';


@Component({
  selector: 'app-userservices',
  templateUrl: './userservices.component.html',
  styleUrls: ['./userservices.component.scss']
})
export class UserservicesComponent implements OnInit {
  userId:any
  userData:any
  serviceDataDisplay: any;

  constructor(private serServiceService :SerServiceService) {
    this.getserviceDetails()
   }

  ngOnInit(): void {
  }
  getserviceDetails(){

    this.serServiceService.serviceGet().subscribe(
      (res: any) => {
            this.serviceDataDisplay = res
           console.log(this.serviceDataDisplay)
            
        }
   // (e)=>console.log("error::",e)
    )
  }

}
