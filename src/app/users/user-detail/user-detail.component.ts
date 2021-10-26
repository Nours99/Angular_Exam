import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Album} from "../../albums/album";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: number;
  user: User;
  albums: Album[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId).subscribe((data: User) => {
      this.user = data;
    });
    this.userService.getAlbumsByUser(this.userId).subscribe((data: Album[]) => {
      this.albums = data;
    });
  }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }

}
