import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../login/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  TimeNow = new Date();
  public year;

  constructor(private customer: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getYear();
  }

  logout() {
    this.customer.removeToken();
    this.router.navigateByUrl('/login');
  }

  getYear() {
    this.year = this.TimeNow.getFullYear();
    return this.year;
  }

}
