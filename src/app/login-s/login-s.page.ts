import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-s',
  templateUrl: './login-s.page.html',
  styleUrls: ['./login-s.page.scss'],
})
export class LoginSPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  entraDashboard() {
    this.router.navigate(['dashboard/tabs/tab1']);
  }
}
