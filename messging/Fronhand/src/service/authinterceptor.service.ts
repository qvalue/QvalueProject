import { AuthService } from 'src/service/auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthinterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    var auth = this.injector.get(AuthService);
    var authRequest = req.clone({
      headers: req.headers.set('Authorization', 'token ' + auth.token),
    });
    return next.handle(authRequest);
  }
}
