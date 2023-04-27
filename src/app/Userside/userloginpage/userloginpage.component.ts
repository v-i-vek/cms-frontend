import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserLoginService } from 'app/services/user-login.service';


@Component({
  selector: 'app-userloginpage',
  templateUrl: './userloginpage.component.html',
  styleUrls: ['./userloginpage.component.css']
})
export class UserloginpageComponent implements OnInit {

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
        console.log("data is saved",res.dbmail._id) 
        localStorage.setItem('token',user);
         this.router.navigate(['/userdashboradhome'],{queryParams:{id:res.dbmail._id}});  
      },
      error:(e)=>console.log("error::",e)
    })
  }
}
