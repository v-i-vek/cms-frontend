import { error } from 'console';
import { SiteManageService } from './../../services/siteManage.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  SiteDataDisplay:any;
  url: any = "https://cms-s1i9.onrender.com/";

  constructor(private siteManageService:SiteManageService) { 
    this.getSiteDetails()
    

  }

  ngOnInit(): void {
    
  }
  
  getSiteDetails(){

    this.siteManageService.siteGet().subscribe(
      (res: any) => {
            this.SiteDataDisplay = res
           console.log(this.SiteDataDisplay)
        }
   // (e)=>console.log("error::",e)
    )
  }

}
