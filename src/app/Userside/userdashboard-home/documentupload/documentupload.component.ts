import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentuploadService } from './../../../services/documentupload.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-documentupload',
  templateUrl: './documentupload.component.html',
  styleUrls: ['./documentupload.component.scss']
})
export class DocumentuploadComponent implements OnInit {
  uploadimageFrom: any
  data: any
  user_Id: string;
  fileUpload: any
  Docname: any
  userDataup:any
  url: any = "https://cms-s1i9.onrender.com/";
  constructor(@Inject(DOCUMENT) private _document: Document,public fb: FormBuilder, private documentuploadService: DocumentuploadService, public router: ActivatedRoute, private rout: Router) {
    this.uploadimageFrom = fb.group(
      {
        user_id: localStorage.getItem("tokenId"),
        documentName: [''],
        documentpdf: [''],
      }
    )
    this.getUserData()
  }

  ngOnInit(): void {
  }

  UploadDoc = [{
    id: 1, name: 'Aadhar Card'
  },
  {
    id: 2, name: 'Pan Card'
  },
  {
    id: 3, name: 'VoterId'
  },
  ];

  docChange(event) {
    console.log(event)
    this.Docname=event 
    
  }


  onChange(event) {
    if (event.target.files.length > 0) {
      this.uploadimageFrom.value.documentpdf = event.target.files[0];
      console.log(">>>>>>>>>>>>>>>>>>>>", this.uploadimageFrom.value.documentpdf)

    }

  }
  postDocumentUpload() {

    let formData = new FormData();
    this.user_Id = localStorage.getItem("tokenId")
    formData.append("user_id",this.uploadimageFrom.value.user_id);
    formData.append("documentName", this.Docname);
    formData.append("documentpdf", this.uploadimageFrom.value.documentpdf);
    this.documentuploadService.postDocUpload(formData).subscribe({
      next: (res: any) => {
        console.log(res)
      }
    })
    this.refresh()
  }

  getUserData(){
    this.user_Id = localStorage.getItem("tokenId")
    this.documentuploadService.getDatauser(this.user_Id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.userDataup=res
       
       this.userDataup.forEach(element => {
        console.log('object45154 :>> ', element);
       });

        
      }
    })
  
  }
  refresh():void {
    this._document.defaultView.location.reload();
  }

}
