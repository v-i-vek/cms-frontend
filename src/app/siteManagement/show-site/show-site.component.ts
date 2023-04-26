import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-site',
  templateUrl: './show-site.component.html',
  styleUrls: ['./show-site.component.scss']
})
export class ShowSiteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any) { 
    console.log(this.editData)
   }
 
  ngOnInit(): void {
  }

}
