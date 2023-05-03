import { Component, Inject, OnInit } from "@angular/core";
import {
  FormGroup,
  Validator,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { SiteManageService } from "app/services/siteManage.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { isModuleNamespaceObject } from "util/types";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ContentObserver } from "@angular/cdk/observers";
import { Console } from "console";

@Component({
  selector: "app-dialog-site",
  templateUrl: "./dialogSite.component.html",
  styleUrls: ["./dialogSite.component.scss"],
})
export class DialogSiteComponent implements OnInit {
  dialogbtn: string = "save";
  siteData: any;
  site_submit_form!: FormGroup;
  editImage: any;

  constructor(
    private siteService: SiteManageService,
    private dialogref: MatDialogRef<DialogSiteComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    this.site_submit_form = new FormGroup({
      siteName: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required,]),
      category: new FormControl("", [Validators.required,]),
      image: new FormControl(""),
      noOfFloor:new FormControl("",[Validators.required]),
      noOfFlatPerFloor:new FormControl("",[Validators.required])
      // fileSource: new FormControl("", [Validators.required]),
    });
  }
// for image selection from the form
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.site_submit_form.value.image = event.target.files[0];
      console.log(this.site_submit_form.value.image)
     
    }
    console.log(event.target.files[0])
  }

  ngOnInit(): void {
    //this is inserting data from table to dialog box
    if (this.editData) {
      this.dialogbtn = "update";
     

      this.site_submit_form.controls["siteName"].setValue(this.editData.siteName);
      this.site_submit_form.controls["category"].setValue(this.editData.category);
      this.site_submit_form.controls["location"].setValue(this.editData.location);
      this.site_submit_form.controls["image"].setValue(this.editData.image);
      this.site_submit_form.controls["noOfFloor"].setValue(this.editData.noOfFloor),
      this.site_submit_form.controls["noOfFlatPerFloor"].setValue(this.editData.noOfFlatPerFloor)
    }
  }

  //method for posting
  sitePostData(data: any) {
    console.log("coming here",this.site_submit_form.value.image);

    
    if (!this.editData) {
     
     // if (this.site_submit_form.valid) {
        console.log("comiing")
        let formData = new FormData();
        formData.append("image", this.site_submit_form.value.image);
        formData.append("siteName", this.site_submit_form.value.siteName);
        formData.append("location", this.site_submit_form.value.location);
        formData.append("category", this.site_submit_form.value.category);
        formData.append("noOfFloor",this.site_submit_form.value.noOfFloor);
        formData.append("noOfFlatPerFloor",this.site_submit_form.value.noOfFlatPerFloor)

        this.siteService.sitePost(formData).subscribe({
          next: (res) => {
            alert("site Added Successfully");
            this.site_submit_form.reset();

            this.dialogref.close();

            // this.dialogref.close();
          },
          error: (err) => {
            console.log(err)
            alert("site is not added");
          },
        });
     // }
    } else {
      this.updateProduct();
    }
  }

  //code for updating the site
async  updateProduct() {
    console.log("==========>",this.site_submit_form.value)
    let formData = new FormData();
    formData.append("image", this.site_submit_form.value.image);
    formData.append("siteName", this.site_submit_form.value.siteName);
    formData.append("location", this.site_submit_form.value.location);
    formData.append("category", this.site_submit_form.value.category);
    formData.append("noOfFloor",this.site_submit_form.value.noOfFloor);
    formData.append("noOfFlatPerFloor",this.site_submit_form.value.noOfFlatPerFloor)

  await  this.siteService
      .siteUpdate(formData, this.editData._id)
      .subscribe(
        (res: any) => {
          alert("site updated successfully");
          this.site_submit_form.reset();
          this.dialogref.close("update");
        },
        (err:any)=>{
          alert("error occured");
        }
        // },
        // error: (e) => {
        //   alert("error occured");
        // },
      //}
      );
  }

  show() {
    this.dialogref.close(true);
  }
}
