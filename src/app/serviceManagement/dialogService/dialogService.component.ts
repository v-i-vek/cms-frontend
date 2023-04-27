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
  editImage : any

  constructor(
    private service: SerServiceService,

    private dialogref: MatDialogRef<DialogSerComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    this.service_submit_form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      customize: new FormControl("", [Validators.required]),
      serviceimage: new FormControl("", ),
      siteName: new FormControl("", [Validators.required])
    });
  }
  onFileSelected(event){
    const file = event.target.files[0];
    const filePath = event.target.value.replace ('C:\\fakepath\\','')
    if(event.target.files.length>0) {
      this.service_submit_form.value.image = event.target.files[0]
      this.editImage = this.service_submit_form
    }
   }


  ngOnInit(): void {
    //this is inserting data from table to dialog box
    if (this.editData) {
      console.log("hello coming here")
     
      this.dialogbtn = "update"
      let edifFd = new FormData()
  
      this.service_submit_form.controls["name"].setValue(this.editData.name);
      this.service_submit_form.controls["description"].setValue(this.editData.description);
      this.service_submit_form.controls["customize"].setValue(this.editData.customize);
      this.service_submit_form.controls["serviceimage"].setValue(this.editImage)
      this.service_submit_form.controls["siteName"].setValue(this.editData.siteName);
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
