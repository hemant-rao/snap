import { Injectable } from '@angular/core';
// import { http } from '@angular/http';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private router: Router) {}
  cardTransection() {
    if (Math.random() * 9 < 5) {
      this.router.navigate(['/status']);
      console.log("my path here-----");
      return true;
    } else {
      return false;
    }
  }
}
