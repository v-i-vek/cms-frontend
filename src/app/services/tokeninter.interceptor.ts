import { UserLoginService } from 'app/services/user-login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokeninterInterceptor implements HttpInterceptor {

  constructor(public userLoginService:UserLoginService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.userLoginService.getToken();
    console.log('$--$',"auhToken from interceptor = ",authToken);
    if(authToken){
      request = request.clone({
        setHeaders : { Authorization: `${authToken}` }
      });
    }
    return next.handle(request);
  }
}
