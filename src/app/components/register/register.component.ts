import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { passwordMismatchValidator } from '../../shared/password.mismatch.directive';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { NgIf } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { RegisterPostData } from '../../iterfaces/auth';
import { ProgressSpinner } from 'primeng/progressspinner';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
    Toast,
    NgIf,
    ProgressSpinner
    ],

  providers: [MessageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isLoading  : boolean = false;

  private readonly registerService = inject(AuthService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/[a-z0-9\._%\+\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$/)
    ]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {
    validators: passwordMismatchValidator
  })

  onRegister() {
    this.isLoading = true;
    const postData = {...this.registerForm.value}
    delete postData.confirmPassword;
    this.registerService.registerUser(postData as RegisterPostData).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Usuario registrado exito',
        });
        this.isLoading = false;
        this.router.navigate(['/login']);
        console.log(response)
      },
      error: (err) => {
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrio un error, intentelo otra vez',
          //life: 3000
        });
        console.log(err);
      }
    })
  }

  get fullName () {
    return this.registerForm.controls['fullName']
  }
  get email () {
    return this.registerForm.controls['email']
  }
  get password () {
    return this.registerForm.controls['password']
  }
  get confirmPassword () {
    return this.registerForm.controls['confirmPassword']
  }
}
