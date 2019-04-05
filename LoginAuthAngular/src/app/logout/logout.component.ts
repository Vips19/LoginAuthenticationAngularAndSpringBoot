import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Route, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService:AuthenticationService,
  private router :Router) { }

  ngOnInit() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
