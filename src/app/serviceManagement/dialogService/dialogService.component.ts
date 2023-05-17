import { Component, Inject, OnInit } from "@angular/core";
import {
  FormGroup,
  Validator,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { isModuleNamespaceObject } from "util/types";
import { Console, log } from "console";
import { SerServiceService } from "app/services/serService.service";
import { ContentObserver } from "@angular/cdk/observers";

@Component({
  selector: "app-dialog-ser",
  templateUrl: "./dialogService.component.html",
  styleUrls: ["./dialogService.component.scss"],
})
export class DialogSerComponent implements OnInit {
  dialogbtn: string = "save";
  formTitle:string="Add Service"
  serviceData: any;
  service_submit_form!: FormGroup;
  editImage: any;
  siteData: any;

  constructor(
    private service: SerServiceService,

    private dialogref: MatDialogRef<DialogSerComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    this.siteData = this.editData.siteData;
    
    this.service_submit_form = new FormGroup({
      name: new FormControl(""),
      description: new FormControl(""),
      customize: new FormControl(""),
      serviceimage: new FormControl(""),
      site_id: new FormControl(""),
    });
   
  }
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.service_submit_form.value.serviceimage = event.target.files[0];
    }
  }

  ngOnInit(): void {
    
    
    //this is inserting data from table to dialog box
    if (this.editData.row) {
      console.log("hello coming here");
      this.formTitle = "Update Service"
      this.dialogbtn = "update";
      let edifFd = new FormData();

      this.service_submit_form.controls["name"].setValue(this.editData.row.name);
      this.service_submit_form.controls["description"].setValue(
        this.editData.row.description
      );
      this.service_submit_form.controls["customize"].setValue(
        this.editData.row.customize
      );
     
      this.service_submit_form.controls["site_id"].setValue(
        this.editData.row.site_id
      );
    }
     
  }
  //method for posting
  servicePostData(data: any) {
    if (!this.editData.row) {
       //if (this.service_submit_form.valid) {

    let formData = new FormData();
    formData.append("name", this.service_submit_form.value.name);
    formData.append("description", this.service_submit_form.value.description);
    formData.append("customize", this.service_submit_form.value.customize);
    formData.append(
      "serviceimage",
      this.service_submit_form.value.serviceimage
    );
    formData.append("site_id", this.service_submit_form.value.site_id);
    console.log(formData);
    this.service.servicePost(formData).subscribe({
      next: (res) => {
        alert("service Added Successfully");
        this.service_submit_form.reset();
        this.dialogref.close("save");
        this.dialogref.close();
      },
      error: () => {
        alert("service is note edded");
      },
    });
 // }
     } else {
      this.updateProduct();
    }
   }

  updateProduct() {


    let formData = new FormData();
    formData.append("name", this.service_submit_form.value.name);
    formData.append("description", this.service_submit_form.value.description);
    formData.append("customize", this.service_submit_form.value.customize);
    formData.append(" serviceimage",this.service_submit_form.value.serviceimage)
 
    this.service

      .serviceUpdate(formData, this.editData.row._id)
      .subscribe({
        next: (res) => {
          alert("service updated successfully");
          this.service_submit_form.reset();
          this.dialogref.close("update");
        },
        error: (e) => {
          alert("error occured");
        },
      });
  }

  show() {
    this.dialogref.close(true);
  }
}
