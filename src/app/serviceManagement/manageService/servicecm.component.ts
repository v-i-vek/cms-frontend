import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogSerComponent } from "../dialogService/dialogService.component";
import { SerServiceService } from "app/services/serService.service";
import { ContentObserver } from "@angular/cdk/observers";
import { SiteManageService } from "app/services/siteManage.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-servicecm",
  templateUrl: "./servicecm.component.html",
  styleUrls: ["./servicecm.component.css"],
})
export class servicecmComponent implements OnInit {
  displayedColumns: string[] = ["name",  "siteName", "serviceimage", "action"];
  dataSource!: MatTableDataSource<any>;


  url: any = "https://cms-s1i9.onrender.com/";

  siteData:any;
  userName: string = '';
  name: string = '';
  description: string = ''
  

  displayedUserColumns: string[] = ["User Name","Services Name",'Description',"action"];
  dataSourceUser!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private service: SerServiceService,private httpSite:SiteManageService,private router: Router) { }
 
  // this dialog box is for saving the site
  openDialog() {
    this.dialog
      .open(DialogSerComponent, {
        width: "30%",
        data:{siteData:this.siteData}
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "save") this.getAllserviceDetail();
      });
  }
  ngOnInit(): void {
    this.getAllserviceDetail();
    this.getSiteDetails()
    this.getUserSeervices();
    console.log("coming")
  }


  //this dialog box for the editing the site
  editserviceDetails(row: any) {
    this.dialog
      .open(DialogSerComponent, {
        width: "30%",
        data: {row:row},
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "update") {
          this.getAllserviceDetail();
        }
      });
  }
  getSiteDetails(){
    this.httpSite.siteGet().subscribe({
     next:(res)=>{
       this.siteData = res
     },
     error:(e)=>{
       
     }
    })
   }

   
  // geting all data from server
  getAllserviceDetail() {
    this.service.serviceGet().subscribe({
      next: (res: any) => {
        console.log("service images",res)
        this.dataSource = new MatTableDataSource(res);
      
        
   
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        alert("error occured while loading the data")
      },
    });
  }

  //deleting data from the server by id
  deleteData(id: any) {
    console.log(id)
  this.service.serviceDelete(id).subscribe({
        next: (res) => {
        alert("service deleted successfully");
        this.getAllserviceDetail();
      },
      error: (e) => {
        alert(e);
      },
    });
  }

  // filtering the table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getUserSeervices(): void {  
     this.service.getUserSeervices().subscribe({
      next: (res: any) => {
        console.log("user services",res)
        this.dataSourceUser = new MatTableDataSource(res);
      
        
   
        this.dataSourceUser.paginator = this.paginator;
        this.dataSourceUser.sort = this.sort;
      },
      error: (error) => {
        alert("error occured while loading the data")
      },
    });
   }
  
}
