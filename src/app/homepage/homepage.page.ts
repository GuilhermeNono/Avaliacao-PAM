import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HomepagePage {

  constructor(private userService: UserService) {
    this.getAllUsers()
  }

  getAllUsers() {
    this.userService.getAll().subscribe((users) => {
      console.log(users);
      return users;
    });
  }
}
