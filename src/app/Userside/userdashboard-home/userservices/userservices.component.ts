import { Component, OnInit } from '@angular/core';
import { ManageUserServiceService } from 'app/services/manageUserService.service';
import { Router } from '@angular/router';
import { SerServiceService } from 'app/services/serService.service';
import { HttpClient } from '@angular/common/http';

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
  name: string;
  description: string;
  customize: string;
  serviceimage: string;

  constructor(private serServiceService :SerServiceService, private http: HttpClient) {
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

  addService() {
    const newService = {
      name: 'Service Name',
      description: 'Service Description'
    };
  
    this.http.post('http://localhost:3000/api/services', newService).subscribe(
      (response) => {
        console.log('Service added successfully');
      },
      (error) => {
        console.error('Error adding service:', error);
      }
    );
  }
}  


