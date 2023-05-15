import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { DialogMaterialComponent } from "../dialog-material/dialog-material.component";
import { MaterialService } from "app/services/material.service";
import { SiteManageService } from "app/services/siteManage.service";

@Component({
  selector: "app-materialcms",
  templateUrl: "./materialcms.component.html",
  styleUrls: ["./materialcms.component.css"],
})
export class MaterialcmsComponent implements OnInit {
  displayedColumns: any = [
    "Material_name",
    "Material_quantity",
    "unit",
    "siteName",
    "Material_cost",
    "Material_status",
    "Download",
    "Action",
  ];
  data: any;
  siteData: any;
  url: any = "http://localhost:3000/";
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(
    private dialog: MatDialog,
    private materialService: MaterialService,
    private httpSite: SiteManageService
  ) {}

  ngOnInit(): void {
    this.getMaterialDetails();
    this.getSiteDetails();
  }

  openDialog() {
    return this.dialog
      .open(DialogMaterialComponent, {
        width: "30%",
        data: { siteData: this.siteData },
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
        console.log("updating");
        this.getMaterialDetails();
      });
  }
  getMaterialDetails() {
    this.materialService.getMaterial().subscribe({
      next: (res: any) => {
        console.log(res);
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
  getSiteDetails() {
    this.httpSite.siteGet().subscribe({
      next: (res) => {
        this.siteData = res;
      },
      error: (e) => {},
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getStatusIcon(status: string) {
    if (status === "Available") {
      return "done";
    } else if (status === "Not Available") {
      return "cancel";
    } else if (status === "In Progress") {
      return "fiber_manual_record";
    } else {
      return "";
    }
  }
  download(row) {
    const documentDefinition = {
      content: [
        {
          text: 'Material Details',
          style: 'header'
        },
        {
          text: `Material Name: ${row.Material_name}`,
          style: 'subheader'
        },
        {
          text: `Material Quantity: ${row.Material_quantity}`,
          style: 'subheader'
        },
        {
          text: `Unit: ${row.unit}`,
          style: 'subheader'
        },
        {
          text: `Site Name: ${row.site_id.siteName}`,
          style: 'subheader'
        },
        {
          text: `Material Cost: ${row.Material_cost}`,
          style: 'subheader'
        },
        {
          text: `Material Status: ${row.Material_status}`,
          style: 'subheader'
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 5]
        }
      }
    };

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download(`Material.pdf`);
  }
  
}
