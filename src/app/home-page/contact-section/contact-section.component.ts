import { FormBuilder, FormControl } from '@angular/forms';
import { ContactService } from 'app/services/contact.service';

import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  ContactForm: any;


  constructor(private contactService: ContactService, private fb: FormBuilder, private toast: NgToastService, private router: Router) {
    this.ContactForm = fb.group({
      contactname: new FormControl(''),
      contactemail: new FormControl(''),
      contactnumber: new FormControl(''),
      contactmessage: new FormControl(''),

    })

  }

  ngOnInit() {
  }
  OnSubmit() {
    console.log('object :>> ', this.ContactForm.value);
    this.contactService.postContact(this.ContactForm.value).subscribe({
      next:(res: any)=>{
        console.log(res)
        this.showInfo()
        this.router.navigate(['/home'])

      },
      error: (e: any) => {
        console.log("error::", e)


      }
    });
  }


  showInfo() {
    this.toast.info({ detail: "INFO", summary: 'Your Request is Inserted ', sticky: true });
  }

}
