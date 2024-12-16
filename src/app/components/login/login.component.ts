import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    email: '',
    password: '',
  };

  onLogin() {
    console.log("desde login", this.login);
  }

}
