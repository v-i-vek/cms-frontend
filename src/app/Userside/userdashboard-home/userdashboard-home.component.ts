import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard-home',
  templateUrl: './userdashboard-home.component.html',
  styleUrls: ['./userdashboard-home.component.scss']
})
export class UserdashboardHomeComponent implements OnInit {

  
  constructor( public router: ActivatedRoute, private rout: Router) {}
 

  ngOnInit(): void {
}

}
