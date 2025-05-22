import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/not-logged/header/header.component';
import { SignInComponent } from '../../../components/not-logged/sign-in/sign-in.component';

@Component({
  selector: 'app-registration',
  imports: [HeaderComponent, SignInComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
