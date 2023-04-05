import { Component, OnInit } from '@angular/core';
import { DialogSiteComponent } from '../dialog-site/dialog-site.component';
import { MatDialog, } from '@angular/material/dialog';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class siteComponent implements OnInit {



  constructor(private dialog:MatDialog){}

  openDialog() {
    this.dialog.open(DialogSiteComponent, {
    width :'30%'
    
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
 
}
