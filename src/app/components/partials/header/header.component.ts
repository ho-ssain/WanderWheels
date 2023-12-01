import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  currentUser: any;

  constructor(private userService: UserService) {
    userService.userObservable.subscribe((newUser) => {
      this.currentUser = newUser?.data;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logOut() {
    this.userService.logout();
  }
}
