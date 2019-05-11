import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {CustomerService} from './customer.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  public mobileView;

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private router: Router,
    private zone: NgZone
    ) {
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      terms: new FormControl('', Validators.required)
    });
  }

  useCredential() {
    this.signInForm.controls.email.setValue('eve.holt@reqres.in');
    this.signInForm.controls.password.setValue('cityslicka');
  }

  tryLogin() {
    const email = this.signInForm.controls.email.value;
    const password = this.signInForm.controls.password.value;

    this.api.login(
      email,
      password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }
}
