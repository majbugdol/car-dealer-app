import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  public get isLoggedIn(): boolean {
    return this.usersService.state.isLoggedIn;
  }

  public onLogout() {
    this.usersService.logout();
  }
}
