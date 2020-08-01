import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/Auth/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }
  ngOnInit(): void {    
   
  }

}
