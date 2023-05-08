import { Component, OnInit } from "@angular/core";
import { DialogSiteComponent } from "../dialogSite/dialogSite.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SiteManageService } from "app/services/siteManage.service";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ShowSiteComponent } from "../show-site/show-site.component";
import { FormControl, FormGroup } from "@angular/forms";
declare var $: any;
@Component({
  selector: "app-notifications",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.css"],
})
export class siteComponent implements OnInit {
  displayedColumns: string[] = [
    "siteName",
    "location",
    "status",
    "category",
    "brandLogo",
    "action",
  ];

  
  url: any = "http://localhost:3000/"; // for giving the path of the image
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private siteService: SiteManageService
  ) {}

  // this dialog box is for saving the site
  openDialog() {
    return this.dialog
      .open(DialogSiteComponent, {
        width: "30%",
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "save") this.getAllSiteDetail();
      });
  }
  ngOnInit(): void {
    this.getAllSiteDetail();
  }

  //this dialog box for the editing the site
  editSiteDetails(row: any) {
    return this.dialog
      .open(DialogSiteComponent, {
        width: "30%",
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "update") {
          this.getAllSiteDetail();
        }
      });
  }

  // geting all data from server
  getAllSiteDetail() {
    this.siteService.siteGet().subscribe({
      next: (res: any) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        
        alert("error occured while fetching the data");
      },
    });
  }
  confirmDelete(id:any){
    
    if (confirm("Site will be permanantly deleted ")) {
     this.deleteData(id)
    } else {
     alert("Deleting site is cancelled")
    }
  }
  //deleting data from the server by id
  deleteData(id: any) {
    this.siteService.siteDelete(id).subscribe({
      next: (res) => {
        alert("site deleted successfully");
        this.getAllSiteDetail();
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

  showSite(row){
    this.dialog.open(ShowSiteComponent,{
      width:"50%",
      data:row
    })
  }

  updateStatus(row:any){

    let currentStatus 
    if(row.status=='ongoing'){
      currentStatus = "Upcoming"
     
    }
    else{
      currentStatus = "ongoing"
    }

    this.siteService.siteStatusUpdate(row._id,{status:currentStatus}).subscribe({
      next:(res)=>{
        alert("Status changed successfully")
      },
      error:(err)=>{
        alert("unambe to update")
      }
    })
  

  }
}
