import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";
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
  getFlatdata: any;
  getFlatNo: any;
  flatData: any[] = [];
  site_id: any;
  getSiteData = this.editData.siteData;
  editMaterial_img: any;
  httpclient: any;
  onlySiteField: any = false;
  onlyUserField: any = false;

  constructor(
    private dialogref: MatDialogRef<DialogMaterialComponent>,
    private http: MaterialService,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    this.material_form = new FormGroup({
      Material_name: new FormControl("", [Validators.required]),
      Material_quantity: new FormControl("", [
        Validators.required,
        Validators.min(10),
      ]),
      siteName: new FormControl("", [Validators.required]),

      unit: new FormControl("", [Validators.required]),
      site_id: new FormControl("", []),
      Material_cost: new FormControl("", [
        Validators.required,
        Validators.min(10),
      ]),
      Material_status: new FormControl(null, [this.materialStatusValidator]),
    });
  }

  materialStatusValidator(control: AbstractControl) {
    if (
      control.value === "tick" ||
      control.value === "cancel" ||
      control.value === "in progress"
    ) {
      return null;
    } else {
      return { invalidStatus: true };
    }
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
    console.log(this.editData);

    console.log("object :>> ", this.editData);
    if (this.editData.siteData == null) {
      this.dialogbtn = "update";
      this.getSiteData = this.editData.siteData;
      this.onlySiteField = !this.onlySiteField;
      this.material_form.controls["siteName"].disable();
      this.material_form.controls["siteName"].setValue(
        this.editData.site_id.siteName
      );
      this.material_form.controls["site_id"].setValue(this.editData.site_id);
    } else {
      this.onlyUserField = !this.onlyUserField;
    }
    this.material_form.controls["Material_name"].setValue(
      this.editData.Material_name
    );
    this.material_form.controls["Material_quantity"].setValue(
      this.editData.Material_quantity
    );
    this.material_form.controls["Material_cost"].setValue(
      this.editData.Material_cost
    );
    this.material_form.controls["unit"].setValue(this.editData.unit);
    // this.material_form.controls["siteName"].setValue(this.editData.siteName);

    this.material_form.controls["Material_status"].setValue(
      this.editData.Material_status
    );
  }

  materialPostData(data: any) {
    if (this.editData.siteData != null) {
      this.material_form.patchValue({
        site_id: this.material_form.value.siteName._id,
      });

      console.log("Posting material data: ", this.material_form.value);
      this.http.materialPost(this.material_form.value).subscribe({
        next: (res) => {
          console.log("Material post success response: ", res);
          this.dialogref.close("save");
          alert("Material Added Successfully");
        },
        error: (e) => {
          console.log("Material post error response: ", e);
          this.dialogref.close("cancel");
          alert("failed to add Material");
        },
      });
    } else {
      console.log("i am not called");
      this.updateProduct();
    }
  }

  updateProduct() {
    let formData = new FormData();
    formData.append("Material_name", this.material_form.value.Material_name);
    formData.append(
      "Material_quantity",
      this.material_form.value.Material_quantity
    );
    formData.append("Material_cost", this.material_form.value.Material_cost);
    formData.append("unit", this.material_form.value.unit);
    formData.append(
      "Material_status",
      this.material_form.value.Material_status
    );

    this.http
      .materialUpdate(this.editData._id, this.material_form.value)
      .subscribe({
        next: (res) => {
          console.log("Material update success response: ", res);
          this.dialogref.close("save");
          alert("Material Updated Successfully");
        },
        error: (e) => {
          console.log("Material update error response: ", e);
          this.dialogref.close("cancel");
          alert("Failed to update Material");
        },
      });
  }

  selectSite() {
    for (let item of this.getSiteData) {
      // This line assumes that the siteData array contains objects with a "name" property
      console.log(item.name);
    }
  }
  getFlatDetails($event) {
    this.getFlatdata = $event.source.value.flatDetails;
    for (let item of this.getFlatdata) console.log(item.flatNo);
    if (this.editData.siteData == null) {
      for (let item of this.getFlatdata) {
        if (item.site_id == this.editData.site_id) {
          this.material_form.controls["siteName"].setValue(
            this.editData.siteName
          );
        }
      }
    }
  }
}
