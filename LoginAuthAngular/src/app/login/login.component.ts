import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  constructor( 
    public fb: FormBuilder,
    public router: Router,
    public loginService:AuthenticationService,
    private toastr: ToastrService) { }

  ngOnInit() {
  
    this.loginForm1();     
  }
  loginForm1() {
    this.loginForm = this.fb.group({
       username: ['', [Validators.required, Validators.minLength(2)]],
  
      password:['']
     
    })  
  }
  ResetForm() {
    this.loginForm.reset();
  } 
  onSubmit(){

 
    if(this.loginService.authenticate(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value))
    {
      this.router.navigate(['home']);  
    }else{

    }
     //   this.toastr.success(this.loginForm.controls['username'].value + ' successfully login!'); // Show success message when data is successfully submited
     //   this.ResetForm();  // Reset form when clicked on reset button
       
  
}}


