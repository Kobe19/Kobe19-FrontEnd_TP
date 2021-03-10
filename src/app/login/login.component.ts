import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  onClickHandler(email:any, password:any) {
    window.alert("email : "+ email.value + " password : "+ password.value);
  }
}
