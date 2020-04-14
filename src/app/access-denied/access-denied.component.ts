import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styles: []
})
export class AccessDeniedComponent implements OnInit {

  redirectUrl: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.redirectUrl = this.route.snapshot.params.url;
  }

  ngOnInit() {
    this.router.navigateByUrl(this.redirectUrl);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
