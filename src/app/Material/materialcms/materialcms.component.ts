import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DialogMaterialComponent } from '../dialog-material/dialog-material.component';
import { MaterialService } from 'app/services/material.service';
import { SiteManageService } from 'app/services/siteManage.service';

@Component({
  selector: 'app-materialcms',
  templateUrl: './materialcms.component.html',
  styleUrls: ['./materialcms.component.css']
})
export class MaterialcmsComponent implements OnInit {

  displayedColumns: any = [
    "Material_name",
    "Material_quantity",
    "siteName",
    "location",
    "category",
    "flatNo",
    "Material_cost",
    "Material_status",
    "Material_img",
    "Action",
  ];
  data:any
  siteData:any;
  siteIdData:any
  url: any = "http://localhost:3000/";
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(
    private dialog: MatDialog,
    private materialService: MaterialService,
    private httpSite:SiteManageService
    ) {}

    ngOnInit(): void {
      this.getMaterialDetails();
      this.getSiteDetails();
    }
  
  openDialog() {
    return this.dialog
      .open(DialogMaterialComponent, {
        width: "30%",
        data: {siteData:this.siteData}
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "save") this.getMaterialDetails();
      });
  }

 

  editMaterialDetails(row: any) {
    return this.dialog
      .open(DialogMaterialComponent, {
        width: "30%",
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "update") {
          console.log("updating");
          this.getMaterialDetails();
        }
      });
  }

  getMaterialDetails() {
    this.materialService.getMaterial().subscribe({
      next: (res: any) => {
        console.log(res);
        this.siteIdData = res;
        for(let data of this.siteIdData){
          console.log("this si id", data.site_id)
        }
       
        
        this.dataSource = new MatTableDataSource(res);
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.warn("MaterialData", res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteData(id: any) {
    this.materialService.deletematerial(id).subscribe({
      next: (res) => {
        alert("Material Deleted Successfully");
        this.getMaterialDetails();
      },
      error: (e) => {
        alert(e);
      },
    });
  }
  getSiteDetails(){
    this.httpSite.siteGet().subscribe({
     next:(res)=>{
       this.siteData = res
      
     },
     error:(e)=>{
       console.log(e)
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
