import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [UserComponent, LayoutComponent],
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
