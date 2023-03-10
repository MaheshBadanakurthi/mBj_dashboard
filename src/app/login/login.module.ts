import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    // BrowserModule,
    LoginRoutingModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
