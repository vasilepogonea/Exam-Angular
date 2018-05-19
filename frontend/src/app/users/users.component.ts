import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users;

  constructor(private usersService: UsersService) {
    this.users = [];
    this.usersService.getUsers()
    .subscribe(data => this.users = data);
  }
  ngOnInit() {  }
}
