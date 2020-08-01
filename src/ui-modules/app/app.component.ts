import { Component, HostListener } from '@angular/core';

import { AuthService } from 'src/services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public auth: AuthService){}

  ngOnInit(){}
}
