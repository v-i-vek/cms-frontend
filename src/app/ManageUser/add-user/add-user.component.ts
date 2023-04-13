import { Dialog } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { UserDialogComponent } from "../user-dialog/user-dialog.component";

import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ManageUserServiceService } from "app/services/manage-user-service.service";
import { data } from "jquery";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  displayedColumns: string[] = ["name", "email", "action"];

  url: any = "http://localhost:3000/"; // for giving the path of the image
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private http: ManageUserServiceService
  ) {}

  ngOnInit(): void {
    console.log("worker");
    this.getAllUser();
  }

  openDialog() {
    return this.dialog.open(UserDialogComponent, {
      width: "30%",
    });
  }

  //getting the value of the user from the data base

  getAllUser() {
    console.log("is coming");
    this.http.getUser().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("manageUser..........", res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  //editing the user details
  editUserDetails(row) {
    this.dialog.open(UserDialogComponent, {
      width: "30%",
      data: row,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
