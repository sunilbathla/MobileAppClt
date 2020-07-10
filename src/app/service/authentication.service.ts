import { Injectable } from '@angular/core';
import { ResponseModel } from '../model/responseModel';
import { HttpClient } from '@angular/common/http';
import { LoginPayload } from '../model/login-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:8080";
  login(loginPayload: LoginPayload) {
    return this.http.post<ResponseModel>(this.baseUrl + '/login/authenticate', loginPayload);
        // .pipe(map(user => {
        //     // login successful if there's a jwt token in the response
        //     if (user) {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         //this.currentUserSubject.next(user.result);
        //     }

        //     return user;
        // }));
  }
}
