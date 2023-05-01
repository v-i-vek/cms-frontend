import { Component, OnInit, ViewChild } from "@angular/core";
import { ContactService } from "app/services/contact.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  displayedColumns: string[] = [
    "contactname",
    "contactnumber",
    "contactemail",
    "contactmessage",
    "actions",
  ];
  contacts: any = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = this.pageSizeOptions[0];
  pageIndex: number = 0;
  totalContacts: number = 0;

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService
      .getContacts(this.pageSize, this.pageIndex)
      .subscribe((data: any) => {
        this.contacts = data;
        this.dataSource = new MatTableDataSource(this.contacts);
        this.dataSource.paginator = this.paginator;
      });
  }

  deleteContact(id: string) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.loadContacts();
      alert("Contact deleted successfully!");
    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadContacts();
  }
}
