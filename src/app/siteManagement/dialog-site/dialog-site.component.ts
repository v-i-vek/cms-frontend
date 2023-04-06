import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validator, FormControl, Validators,FormBuilder } from "@angular/forms";
import { SiteManageService } from "app/services/site-manage.service";
import { MatDialogRef} from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { isModuleNamespaceObject } from "util/types";

@Component({
  selector: "app-dialog-site",
  templateUrl: "./dialog-site.component.html",
  styleUrls: ["./dialog-site.component.scss"],
})
export class DialogSiteComponent implements OnInit {


  siteData:any;
  site_submit_form !:FormGroup;


  constructor(
    private siteService: SiteManageService,
    private dialogref: MatDialogRef<DialogSiteComponent>,
    @Inject(MAT_DIALOG_DATA) public editData
  ) {
    console.log(editData);
    
    
  }



  ngOnInit(): void {
    
    // console.log(this.editData);
    
    this.site_submit_form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
    });
    // console.log(this.editData)
    
    // if(this.editData){
    // this.site_submit_form.controls['name'].setValue(this.editData)
    // this.site_submit_form.controls['category'].setValue(this.editData)
    // this.site_submit_form.controls['location'].setValue(this.editData)


      
    // }
   
  }
 
  //method for posting
  
  
  sitePostData(data: any) {
    console.warn(data);
    this.siteService.sitePost(data).subscribe({
      next: (res) => {
        alert("site Added Successfully");
        this.site_submit_form.reset();
        // this.dialogref.close();
      },
      error: () => {
        alert("site is note edded");
      },
    });
  }

  // getting all data
 
  show() {
    // api
    // 
    this.dialogref.close(true);
    console.warn(this.site_submit_form.value);
  }



}
