import { Component, OnDestroy, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CustomerService } from './login/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Activate';

  constructor(private customer: CustomerService) {
  }
  currentToken: string;

  // ngOnInit(): void {
  //   this.customer.removeToken();
  // }
}
