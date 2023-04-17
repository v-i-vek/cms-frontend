import { Dialog } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { UserDialogComponent } from "../userDialog/userDialog.component";

import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ManageUserServiceService } from "app/services/manageUserService.service";
import { data } from "jquery";

@Component({
  selector: "app-add-user",
  templateUrl: "./addUser.component.html",
  styleUrls: ["./addUser.component.scss"],
})
export class AddUserComponent implements OnInit {
  displayedColumns: string[] = ["name", "email", "action"];

  data:any

  url: any = "http://localhost:3000/"; // for giving the path of the image
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private http: ManageUserServiceService
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  openDialog() {
    return this.dialog.open(UserDialogComponent, {
      width: "30%",
    });
  }

  //getting the value of the user from the data base

  getAllUser() {
    this.http.getUser().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {},
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
  sendMail(row){
    this.http.sendMail(row._id).subscribe({
      next:()=>{
        alert("password is send to "+row.email)

      },
      error:()=>{
        alert("unable to send password to " + row.email)

      }
    })
  }
}
