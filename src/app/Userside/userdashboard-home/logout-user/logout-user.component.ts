import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'app/services/logout.service';


@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.scss']
})
export class LogoutUserComponent implements OnInit {

  constructor(private router : Router,private  logoutService : LogoutService) {
   


  }
   

  ngOnInit(): void {
    this.logoutuse()
  }
  logoutuse(){
    localStorage.removeItem('token');
    localStorage.removeItem('tokenId');
    this.router.navigate(['/login']);
  }

}
