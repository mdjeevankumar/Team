import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/services/Auth/auth.guard';
import { LoginButtonComponent } from '../login-button/login-button.component';
const routes: Routes = [
  {
    path: '',
    component: LoginButtonComponent,
    canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
