import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component'
import {LogoutComponent} from './logout/logout.component'
import { AuthguardService } from './services/authguard.service';

const routes: Routes =[
{ path: '', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthguardService]},
  {path: 'home', component: HomeComponent,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }