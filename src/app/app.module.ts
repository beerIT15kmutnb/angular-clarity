import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { AlertService } from './alert.service';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    LoginModule,
    AuthModule,
    AdminModule

  ],
  providers: [
    { provide: 'API_URL', useValue: environment.apiUrl },
    AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
