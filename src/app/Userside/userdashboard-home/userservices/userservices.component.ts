import { Component, OnInit } from '@angular/core';
import { ManageUserServiceService } from 'app/services/manageUserService.service';
import { Router } from '@angular/router';
import { SerServiceService } from 'app/services/serService.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-userservices',
  templateUrl: './userservices.component.html',
  styleUrls: ['./userservices.component.scss']
})
export class UserservicesComponent implements OnInit {
  userId:any;
  userData:any;
  serviceDataDisplay: any[];
  selectedServices: any[] = [];
  


  constructor(private serServiceService :SerServiceService, private http: HttpClient,) {
    this.getserviceDetails();
  }

  ngOnInit(): void {
  }

  getserviceDetails(){
    this.serServiceService.serviceGet().subscribe(
      (res: any) => {
        this.serviceDataDisplay = res;
        console.log(this.serviceDataDisplay);
      }
    );
  }
  addService(service: any){
    console.log(service,"ttttttttt");
    
    if(!this.selectedServices.includes(service)) {
      this.selectedServices.push(service);
    } else{

    }
  }

  requestService(){
    const userId = localStorage.getItem('tokenId')
    const selectedServices = this.selectedServices.map((service)=>({
      id: service.id,
      name:service.name,
      description: service.description
    }));

    const payload = {
      selectedServices,
      userId
    };
    this.http.post('http://localhost:3000/update-service',payload).subscribe(
      (response: any)=>{
        console.log('request sent successfull')
      },
      (error:any)=>{
        console.log("error sending request:",error)
      }
    )
  
  }
}

