// import { AuthService } from './../auth/auth.service';
// import { CreditService } from './../services/credit.service';
import { AlertService } from 'src/app/alert.service';
// import { WalletService } from './../services/wallet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  name: any;
  public jwtHelper = new JwtHelperService();
  constructor(
    private route: Router,
    private alertService: AlertService,
    // private authService: AuthService
  ) {
    const token = sessionStorage.getItem('token');
    const decoded = this.jwtHelper.decodeToken(token);
    this.name = decoded.name;
  }

  ngOnInit() {
    // this.menu = this.authService.checkAuth('AUTH');
  }


  logout() {
    sessionStorage.clear();
    this.route.navigate(['/login']);
  }

}
