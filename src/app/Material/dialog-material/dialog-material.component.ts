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
  editMaterial_img: any;

  constructor(
    private materialService: MaterialService,
    private dialogref: MatDialogRef<DialogMaterialComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {
    this.material_form = new FormGroup({
      Material_name: new FormControl("", [Validators.required]),
      Material_quantity: new FormControl("", [
        Validators.required,
        Validators.min(10),
      ]),
      sitename: new FormControl("", [Validators.required]),
      flatnumber: new FormControl("", [Validators.required]),
      Material_cost: new FormControl("", [
        Validators.required,
        Validators.min(10),
      ]),
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
    if (this.editData) {
      console.log("hello coming here");
      this.dialogbtn = "update";

      let edifFd = new FormData();
      this.material_form.controls["Material_name"].setValue(
        this.editData.Material_name
      );
      this.material_form.controls["Material_quantity"].setValue(
        this.editData.Material_quantity
      );
      this.material_form.controls["Material_cost"].setValue(
        this.editData.Material_cost
      );
      this.material_form.controls["sitename"].setValue(this.editData.sitename);
      this.material_form.controls["flatnumber"].setValue(
        this.editData.flatnumber
      );
      this.material_form.controls["Material_status"].setValue(
        this.editData.Material_status
      );
      this.material_form.controls["Material_img"].setValue(
        this.editMaterial_img
      );
    }
  }

  materialPostData(data: any) {
    console.log(this.material_form.value);
    if (!this.editData) {
      if (this.material_form.valid) {
        console.warn(data);
        this.materialService.materialPost(data).subscribe({
          next: (res) => {
            alert("Material Added Successfully");
            this.material_form.reset();
            this.dialogref.close("save");
            this.dialogref.close();
          },
          error: () => {
            alert("Material is not added");
          },
        });
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    console.log(this.editData._id);
    console.log(this.material_form.value);
    this.materialService
      .materialUpdate(this.material_form.value, this.editData._id)
      .subscribe({
        next: (res) => {
          alert("Material Updated Successfully");
          this.material_form.reset();
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
