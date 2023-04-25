import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'app/services/user-login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  LoginForm: any;

  constructor(private fb : FormBuilder ,public router: Router, private userloginservice :UserLoginService) { 
    this.LoginForm =fb.group({
      email:new FormControl('',[]),
      password:new FormControl('',[])
    })
  }

  ngOnInit(): void {
  }
  OnSubmit(data:any){
 console.log(this.LoginForm.value)
    this.userloginservice.LoginForm(this.LoginForm.value).subscribe({
      next:(res:any) => {
        const user = res.user
        console.log("data is saved",res) 
        localStorage.setItem('token',user);
         this.router.navigate(['/dashboard']);  
      },
      error:(e)=>console.log("error::",e)
    })
  }
}
