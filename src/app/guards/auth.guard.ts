import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private ngToast: NgToastService) {

  }
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      
      return true
    } else {
      this.ngToast.error({detail:"Error", summary:"Please Login First!"});
      alert('You must be logged in to view that page');
      // this.ngToast.danger('Oops! Something went wrong.');
      this.router.navigate(['login'])
      return false;
    }
  }
}
