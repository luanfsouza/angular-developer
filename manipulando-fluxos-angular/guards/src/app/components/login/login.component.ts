import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private service: LoginService) {}
  ngOnInit(): void {}

  logar() {
    this.service.doLogin();
  }
  deslogar() {
    this.service.doLogout();
  }
}
