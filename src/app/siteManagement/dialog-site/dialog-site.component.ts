import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validator, FormControl, Validators,FormBuilder } from "@angular/forms";
import { SiteManageService } from "app/services/site-manage.service";
import { MatDialogRef} from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { isModuleNamespaceObject } from "util/types";
import { log } from "console";

@Component({
  selector: "app-dialog-site",
  templateUrl: "./dialog-site.component.html",
  styleUrls: ["./dialog-site.component.scss"],
})
export class  DialogSiteComponent implements OnInit {

  dialogbtn:string='save'
  siteData:any;
  site_submit_form !:FormGroup;


  constructor(
    private siteService: SiteManageService,
    private dialogref: MatDialogRef<DialogSiteComponent>,
    @Inject(MAT_DIALOG_DATA) public editData:any
  ) {
    console.log(editData);
    
    
  }



  ngOnInit(): void {
    
     console.log(this.editData._id);
    
    this.site_submit_form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
    });
  
    
    if(this.editData){
      this.dialogbtn = 'update'
    this.site_submit_form.controls['name'].setValue(this.editData.name)
    this.site_submit_form.controls['category'].setValue(this.editData.category)
    this.site_submit_form.controls['location'].setValue(this.editData.location)


      
     }
   
  }
 
  //method for posting
  
  
  sitePostData(data: any) {
    if(!this.site_submit_form){
      if(this.site_submit_form){
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
     
    }
    else{
      this.updateProduct()
    }
  }
  updateProduct(){
    this.siteService.siteUpdate(this.site_submit_form.value,this.editData._id).subscribe({
      next:(res)=>{
        alert("site updated successfully")
        this.site_submit_form.reset();
        this.dialogref.close('update')
      },
      error:(e)=>{
        alert('error occured')
        console.log(e);
        
      }
    })
  }
  // getting all data
 
  show() {
    // api
    // 
    this.dialogref.close(true);
    console.warn(this.site_submit_form.value);
  }



}
