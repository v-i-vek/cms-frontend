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
import { log } from "console";
import { SerServiceService } from "app/services/serService.service";

@Component({
  selector: "app-dialog-ser",
  templateUrl: "./dialogService.component.html",
  styleUrls: ["./dialogService.component.scss"],
})
export class DialogSerComponent implements OnInit {
  dialogbtn: string = "save";
  serviceData: any;
  service_submit_form!: FormGroup;

  constructor(
    private service: SerServiceService,

    private dialogref: MatDialogRef<DialogSerComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    this.service_submit_form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      customize: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    //this is inserting data from table to dialog box
    if (this.editData) {
      this.dialogbtn = "update";
      this.service_submit_form.controls["name"].setValue(this.editData.name);
      this.service_submit_form.controls["description"].setValue(
        this.editData.description
      );
      this.service_submit_form.controls["customize"].setValue(
        this.editData.customize
      );
    }
  }
  //method for posting
  servicePostData(data: any) {
    if (!this.editData) {
      if (this.service_submit_form.valid) {
        this.service.servicePost(data).subscribe({
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
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.service
      .serviceUpdate(this.service_submit_form.value, this.editData._id)
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
