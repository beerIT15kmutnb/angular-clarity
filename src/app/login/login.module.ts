import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
// import { LoginService } from './login.service';
// import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoginRoutingModule,
    // DeviceDetectorModule.forRoot()
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
