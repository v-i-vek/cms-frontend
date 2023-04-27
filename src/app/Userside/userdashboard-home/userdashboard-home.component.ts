import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard-home',
  templateUrl: './userdashboard-home.component.html',
  styleUrls: ['./userdashboard-home.component.scss']
})
export class UserdashboardHomeComponent implements OnInit {
  userId: any;
  
  constructor( public router: ActivatedRoute, private rout: Router) {}
 

  ngOnInit(): void {
    this.router.queryParams.subscribe(param => {
      this.userId = param.id;
      localStorage.setItem('tokenId',this.userId);
  })
}

}
