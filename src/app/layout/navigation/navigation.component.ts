import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  public get isLoggedIn(): boolean {
    return this.usersService.state.isLoggedIn;
  }

  public onLogout() {
    this.usersService.logout();
  }

  public onLoginButton() {
    this.matDialog.open(LoginComponent);
  }
}
