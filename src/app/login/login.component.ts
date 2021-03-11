import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router: Router) {}

  email = ''
  password = ''
  
  async onClickHandler() {
    //window.alert(`email : '${this.email}', password : '${this.password}'`);
    window.alert("No account found for this email");
    //await this.router.navigateByUrl('/profile');
  }

 
}
