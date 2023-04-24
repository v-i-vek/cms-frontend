import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogSerComponent } from "../dialogService/dialogService.component";
import { SerServiceService } from "app/services/serService.service";
@Component({
  selector: "app-servicecm",
  templateUrl: "./servicecm.component.html",
  styleUrls: ["./servicecm.component.css"],
})
export class servicecmComponent implements OnInit {
  displayedColumns: string[] = ["name", "description", "customize","serviceimage", "action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private service: SerServiceService) {}
  // this dialog box is for saving the site
  openDialog() {
    this.dialog
      .open(DialogSerComponent, {
        width: "30%",
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "save") this.getAllserviceDetail();
      });
  }
  ngOnInit(): void {
  //  this.getAllserviceDetail();
  }

  //this dialog box for the editing the site
  editserviceDetails(row: any) {
    this.dialog
      .open(DialogSerComponent, {
        width: "30%",
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === "update") {
          this.getAllserviceDetail();
        }
      });
  }
  // geting all data from server
  getAllserviceDetail() {
    this.service.serviceGet().subscribe({
      next: (res: any) => {
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
    this.service.serviceDelete(id).subscribe({
      next: (res) => {
        alert("site deleted successfully");
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
}
