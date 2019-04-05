import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpclientService, User } from '../services/httpclient.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  u: User = new User("","","","","");
  registerForm: FormGroup;
  constructor(
    private httpClientService: HttpclientService,
    public fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
   
    this.registerForm1();     
  }
 registerForm1() {
    this.registerForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
      addr: [''],
       mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
     // email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      userName: ['', [Validators.required, Validators.minLength(2)]],
      password:['']
     
    })  
  }
  ResetForm() {
    this.registerForm.reset();
  } 


onSubmit(){

     this.httpClientService.addUser(this.u).subscribe(
       data=>{alert("hi add user done");
       });
   /* this.toastr.success(this.registerForm.controls['Name'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button  */
}

}