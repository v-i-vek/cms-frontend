import { Component, OnInit } from '@angular/core';
import {FormGroup,Validator,FormControl, Validators } from '@angular/forms';
import { SiteManageService } from 'app/services/site-manage.service'; 

@Component({
  selector: 'app-dialog-site',
  templateUrl: './dialog-site.component.html',
  styleUrls: ['./dialog-site.component.scss']
})
export class DialogSiteComponent implements OnInit {

  constructor(private siteService : SiteManageService) { }

  ngOnInit(): void {
  }
  site_submit_form = new FormGroup({
    name : new FormControl('',[Validators.required]),
    category : new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required])
  
   })
 
  
   sitePostData(data:any){
    console.warn( data )
    this.siteService.sitePost(data).subscribe((data)=>{
      console.warn( data )
    })
   }
  
   show(){
    console.warn(this.site_submit_form.value)
   }
}
