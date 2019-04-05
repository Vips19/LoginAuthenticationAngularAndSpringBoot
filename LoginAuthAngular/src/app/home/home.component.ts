import { Component, OnInit } from '@angular/core';
import { HttpclientService,User } from '../services/httpclient.service';
import { Response } from '../../../node_modules/@types/selenium-webdriver/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Users: User[];


  constructor(private httpclient:HttpclientService,
  
  ) { }

  ngOnInit() {
    this.httpclient.getUsers().subscribe(
     response=>this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response)
  {
      this.Users=response;
  }

}
