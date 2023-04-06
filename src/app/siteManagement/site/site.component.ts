import { Component, OnInit } from '@angular/core';
import { DialogSiteComponent } from '../dialog-site/dialog-site.component';
import { MatDialog, } from '@angular/material/dialog';
import { SiteManageService } from 'app/services/site-manage.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class siteComponent implements OnInit {

  displayedColumns: string[] = ['name', 'location', 'category','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog, private siteService:SiteManageService){}

  openDialog() {
    this.dialog.open(DialogSiteComponent, {
    width :'30%'
    
    });
  }
  ngOnInit(): void {
    this.getAllSiteDetail()
  
  }

  editSiteDetails(row:any){

    
    this.dialog.open(DialogSiteComponent),{
      width:"30%",
      data:row
    }
  }

  
  getAllSiteDetail(){
    this.siteService.siteGet().subscribe({next:(res:any)=>{
      this.dataSource = new MatTableDataSource(res)
     this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.warn(res)
    
    },
    error:(error)=>{
      console.log(error)
    }
    
  })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 
}
