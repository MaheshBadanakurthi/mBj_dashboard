import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserJsonData } from '../../Models/login';
import userLoginData from '../../assets/credentials/data.json';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  userLoginData: UserJsonData[] = userLoginData;
  loginForm!: FormGroup;
  activeSubmit: boolean = true;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public message: MessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public userLogin(): void {
      this.userLoginData.filter((data) => {
        try {
          if (
            data.userName === this.loginForm.value.userName &&
            data.password === this.loginForm.value.password
          ) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully',
            });

            sessionStorage.setItem('login', '1');
            this.router.navigate(['/dashboard']);

          } else {
            Swal.fire({
              icon: 'warning',
              title: 'Login failed',
              titleText: 'Please check User name or Password',
              timerProgressBar: true,
              timer: 1500,
            });
          }
        } catch (error) {
          console.log(error);

        }
      });
    }
  }

