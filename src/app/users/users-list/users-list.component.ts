import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];
  inputValue: string = "";

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  ngOnInit(): void {
  }

  getUserByFilter() {
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(this.inputValue.toLowerCase()));
  }

}

