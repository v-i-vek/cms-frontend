import { Component, OnInit } from '@angular/core';
import { SerServiceService } from 'app/services/serService.service';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  url: any = "https://cms-s1i9.onrender.com/";
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
