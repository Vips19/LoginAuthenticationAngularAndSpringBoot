import { Injectable } from '@angular/core';
import { HttpclientService, User } from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user :User;

  constructor(private httpclient: HttpclientService) { }

    authenticate(username,pass){

      this.httpclient.getUserById(username).subscribe
      (
        response=>{this.GetUserResponse(response);}
      );
      
      if (pass===this.user.password)
      {
          sessionStorage.setItem("username",username);
          return true;
      }
      else
      return false;
    }

    isUserLoggedIn(){
      let user=sessionStorage.getItem("username");
      console.log(!(user===null))
      return !(user===null)
    }
    logout(){
      sessionStorage.removeItem("username");
    }

    GetUserResponse(response)
    {
      this.user=response;
      console.log(this.user.password);
    }

}
