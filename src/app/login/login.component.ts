import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth$LoginParams } from '@backend/routes/auth/post.login';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  errors: string[] = [];
  email = ''
  password = ''
  
  constructor (private router: Router, private httpClient: HttpClient) {}
  async onClickHandler() {
    //window.alert(`email : '${this.email}', password : '${this.password}'`);
    //window.alert("No account found for this email");
    //await this.router.navigateByUrl('/profile');

    try {
      this.errors = [];
      const body: Auth$LoginParams = { email: this.email, password: this.password };
      await this.httpClient.post('/auth/login', body).toPromise();
      await this.httpClient.post('/auth/login', { email: this.email, password: this.password }).toPromise();
      await this.router.navigateByUrl('/profile');
    } catch (err) {
      if (err instanceof HttpErrorResponse) this.errors = err.error?.messages;
  
      if (!this.errors) {
        this.errors = ['An unknown error has occured'];
        throw err; // resume error propagation, so monitoring tool (if any) catches it
      }
    }
  }

  
  }

  
