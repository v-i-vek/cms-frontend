import { Component, Inject, OnInit } from "@angular/core";
import {
  FormGroup,
  Validator,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { SiteManageService } from "app/services/site-manage.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { isModuleNamespaceObject } from "util/types";
import { log } from "console";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-dialog-site",
  templateUrl: "./dialog-site.component.html",
  styleUrls: ["./dialog-site.component.scss"],
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
      name: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      // fileSource: new FormControl("", [Validators.required]),
    });
  }
// for image selection from the form
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.site_submit_form.value.image = event.target.files[0];
      this.editImage = this.site_submit_form;
    }
  }

  ngOnInit(): void {
    //this is inserting data from table to dialog box
    if (this.editData) {
      console.log("hello coming here");

      this.dialogbtn = "update";
      let edifFd = new FormData();

      this.site_submit_form.controls["name"].setValue(this.editData.name);
      this.site_submit_form.controls["category"].setValue(
        this.editData.category
      );
      this.site_submit_form.controls["location"].setValue(
        this.editData.location
      );
      this.site_submit_form.controls["image"].setValue(this.editImage);
    }
  }

  //method for posting
  sitePostData(data: any) {
    if (!this.editData) {
      if (this.site_submit_form.valid) {
        console.log("calling post method");
        let formData = new FormData();
        formData.append("image", this.site_submit_form.value.image);
        formData.append("name", this.site_submit_form.value.name);
        formData.append("location", this.site_submit_form.value.location);
        formData.append("category", this.site_submit_form.value.category);

        this.siteService.sitePost(formData).subscribe({
          next: (res) => {
            alert("site Added Successfully");
            this.site_submit_form.reset();

            this.dialogref.close("save");

            // this.dialogref.close();
          },
          error: (err) => {
            alert("site is not added");
            console.log(err);
          },
        });
      }
    } else {
      console.log("coming in update file");

      this.updateProduct();
    }
  }

  //code for updating the site
  updateProduct() {
    console.log(this.editData._id);
    console.log(this.site_submit_form.value);
    this.siteService
      .siteUpdate(this.site_submit_form.value, this.editData._id)
      .subscribe({
        next: (res) => {
          alert("site updated successfully");
          this.site_submit_form.reset();
          this.dialogref.close("update");
        },
        error: (e) => {
          alert("error occured");
          console.log(e);
        },
      });
  }

  show() {
    this.dialogref.close(true);
  }
}
