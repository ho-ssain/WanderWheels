import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrl: './access.component.css',
})
export class AccessComponent {
  userObj: any = {
    userId: 0,
    name: '',
    userRole: '',
    emailId: '',
    mobileNo: '',
    password: '',
    createdOn: new Date(),
  };

  loginObj: any = {
    userId: 0,
    name: '111',
    userRole: '111',
    emailId: '',
    mobileNo: '1111',
    password: '',
    createdOn: new Date(),
  };

  returnUrl = '';

  constructor(private userService: UserService, private router: Router) {}

  onSignUp() {
    // debugger;
    this.userService.signUpUser(this.userObj).subscribe((res: any) => {
      if (res.result) this.router.navigateByUrl(this.returnUrl);
    });
  }

  onLogin() {
    this.userService.loginUser(this.loginObj).subscribe((res: any) => {
      // debugger;
      if (res.result) this.router.navigateByUrl(this.returnUrl);
    });
  }
}
