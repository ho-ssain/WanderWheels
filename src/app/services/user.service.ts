import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddNewUser, Login } from '../constants/urls';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userObservable: Observable<any>;

  private userSubject = new BehaviorSubject<any>(
    this.getUserFromLocalStorage()
  );

  public get currentUser(): any {
    return this.userSubject.value;
  }

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  private setUserToLocalStorage(user: any) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): any {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson);
    // return new User();
  }

  signUpUser(user: any) {
    // debugger;
    return this.http.post(AddNewUser, user).pipe(
      tap({
        next: (user) => {
          console.log(user);
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Wander Wheels!`,
            'Register Successful'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Register Failed');
        },
      })
    );
  }

  loginUser(user: any) {
    // debugger;
    return this.http.post(Login, user).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Wander Wheels!`,
            'Sign-in Successfull!'
          );
        },
        error: (errorRes) => {
          this.toastrService.error(errorRes.error, 'Login failed!');
        },
      })
    );
  }

  logout() {
    // this.userSubject.next();
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }
}
