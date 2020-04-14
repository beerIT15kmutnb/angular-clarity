import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  rememberMe = false;
  isError: any;
  errorMessage: string;
  userTypeId: string;

  public jwtHelper = new JwtHelperService();

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  async ngOnInit() {
    await this.getRemember();
  }

  async doLogin() {
    // this.route.navigate(['/material']);
    try {
      this.isError = false;
      this.errorMessage = '';
      if (this.username && this.password) {
        await this.remember();
        const data: any = await this.loginService.login(this.username, this.password);
        if (data.ok) {
          if (data.rows) {
            sessionStorage.setItem('token', data.token);
            this.route.navigate(['/material']);
            // if (data.rows.user_type === 'SUPER_ADMIN') {

            // } else if (data.rows.user_type === 'SUB_ADMIN') {
            //   // this.route.navigate(['/material']);
            // } else if (data.rows.user_type === 'USER') {
            //   // this.route.navigate(['/material']);
            // }
          } else {
            this.isError = true;
            this.errorMessage = 'ไม่พบสิทธิ์เข้าถึง';
          }
          // sessionStorage.setItem('token', data.token);
          // this.route.navigate(['/material']);
        } else {
          this.isError = true;
          this.errorMessage = 'Invalid user name or password';
        }
      } else {
        this.isError = true;
        this.errorMessage = 'กรุณาระบุชื่อผู้ใช้งาน หรือ รหัสผ่าน';
      }
    } catch (error) {
      this.isError = true;
      this.errorMessage = 'เกิดปัญหาในการเชื่อมต่อ';
    }
  }

  getRemember() {
    if (localStorage.getItem('rememberMe') === 'Y') {
      this.username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
      this.password = localStorage.getItem('password') ? localStorage.getItem('password') : '';
      this.rememberMe = true;
    }
  }

  remember() {
    if (this.rememberMe) {
      localStorage.setItem('rememberMe', 'Y');
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
    } else {
      localStorage.setItem('rememberMe', 'N');
    }
  }
}
