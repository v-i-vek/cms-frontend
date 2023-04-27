import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MaterialService } from "app/services/material.service";

@Component({
  selector: "app-dialog-material",
  templateUrl: "./dialog-material.component.html",
  styleUrls: ["./dialog-material.component.scss"],
})
export class DialogMaterialComponent implements OnInit {
  material_form!: FormGroup;
  MaterialData: any;
  dialogbtn: string = "save";
  getFlatdata:any;
  site_id:any
  getSiteData = this.editData.siteData
  editMaterial_img: any;
  

  constructor(

    private dialogref: MatDialogRef<DialogMaterialComponent>,
    private http: MaterialService ,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    this.material_form = new FormGroup({
      Material_name: new FormControl("", [Validators.required]),
      Material_quantity: new FormControl("", [
        Validators.required,
        Validators.min(10),
      ]),
      siteName: new FormControl("", [Validators.required]),
      site_id: new FormControl("", [Validators.required]),
      flatNo: new FormControl("", [Validators.required]),
      Material_cost: new FormControl("", [
        Validators.required,
        Validators.min(10),
      ]),
   
      location: new FormControl("", [Validators.required,]),
      category: new FormControl("", [Validators.required,]),
      Material_status: new FormControl("", [Validators.required]),
      Material_img: new FormControl("", [Validators.required]),
    });
  }
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.material_form.patchValue({
          Material_img: reader.result,
        });
        this.editMaterial_img = this.material_form;
      };
    }
  }

  

    ngOnInit(): void {

  
    if (this.editData.row) {
      this.dialogbtn = "update";

      this.material_form.controls["Material_name"].setValue(
        this.editData.Material_name
      );
      this.material_form.controls["Material_quantity"].setValue(
        this.editData.Material_quantity
      );
      this.material_form.controls["Material_cost"].setValue(
        this.editData.Material_cost
      );
      this.material_form.controls["siteName"].setValue(this.editData.siteName);
      this.material_form.controls["site_id"].setValue(this.editData.site_id);
      this.material_form.controls["category"].setValue(
        this.editData.category
      );
      this.material_form.controls["location"].setValue(
        this.editData.location
      );
      this.material_form.controls["flatNo"].setValue(
        this.editData.flatNo
      );
      this.material_form.controls["Material_status"].setValue(
        this.editData.Material_status
      );
      this.material_form.controls["Material_img"].setValue(this.editMaterial_img.get("Material_img").value);
    }
  }
  

  materialPostData(data: any) {
    if (!this.editData.row) {
      // if (this.material_form.valid) {
        this.http. materialPost(this.material_form.value).subscribe({

          next: (res) => {
            this.dialogref.close("save");
            alert("Material Added Successfully");
          },
          error: (e) => {
            this.dialogref.close("cancel");
            alert("failed to add Material");
          },
        });
      }
      else {
        this.updateProduct();
      }
    }
 
  // console.log("comiing")
  // let formData = new FormData();
  // formData.append("Material_name", this.material_form.value.Material_name);
  // formData.append("Material_quantity", this.material_form.value.Material_quantity);
  // formData.append("Material_cost", this.material_form.value.Material_cost);
  // formData.append("siteName", this.material_form.value.siteName);
  // formData.append("category",this.material_form.value.category);
  // formData.append("location",this.material_form.value.location);
  // formData.append("flatNo",this.material_form.value.flatNo);
  // formData.append("Material_status",this.material_form.value.Material_status)
  // formData.append("Material_img",this.material_form.value.Material_img);

  updateProduct() {
    this.http
      .materialUpdate(this.material_form.value, this.editData._id)
      .subscribe({
        next: (res) => {
          alert("Material Updated Successfully");
          this.dialogref.close("save");
        },
        error: (e) => {
          alert("something went wrong,unable to update material");
          this.dialogref.close("cancel");
        },
      });
  }
  selectSite()
  {
    for(let item of this.getSiteData){

  }
}

  
  getFlatDetails($event){
    this.getFlatdata = $event.source.value.flatDetails;
   for( let item of this.getFlatdata)
    console.log("this is sth ",item.flatNo)
  }
  
}
