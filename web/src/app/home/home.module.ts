import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sig-in/sign-in.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    VMessageModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class HomeModule { }