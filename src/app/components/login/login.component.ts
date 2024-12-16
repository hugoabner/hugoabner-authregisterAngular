import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
    Toast],
  providers: [MessageService],
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
