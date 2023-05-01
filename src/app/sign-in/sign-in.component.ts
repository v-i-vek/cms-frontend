import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'app/services/user-login.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  LoginForm: any;

  constructor(private fb : FormBuilder ,public router: Router, private userloginservice :UserLoginService ,private toast:NgToastService) { 
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
        const user = res
        console.log("data is saved",res.user) 
       if(res.dbmail.role=='Admin'){
        localStorage.setItem('token',res.user);
        this.showInfo()
         this.router.navigate(['/dashboard']); 
        
       }else{
        console.log(res.user)
        localStorage.setItem('token',res.user);
        console.log("data is saved",res.dbmail._id) 
        localStorage.setItem('tokenId',res.dbmail._id);
        this.showInfo()
        this.router.navigate(['/userdashboradhome']); 
       } 
      },
      error:(e)=>{console.log("error::",e)
     this.showError()
     
    }
    })
  }


  showError() {
    this.toast.error({detail:"ERROR",summary:'Invalid email & password ',sticky:true});
  }

  showInfo() {
    this.toast.info({detail:"INFO",summary:'Login Sucessfully',sticky:true});
  }

 



}
