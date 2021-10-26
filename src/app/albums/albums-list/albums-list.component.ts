import {Component, OnInit} from '@angular/core';
import {Album} from "../album";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})

export class AlbumsListComponent implements OnInit {

  albums: Album[] = [];
  filteredAlbums: Album[] = [];
  inputValue: string = "";

  constructor(private albumService: AlbumService) {
    this.albumService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
      this.filteredAlbums = data;
    });
  }

  ngOnInit(): void {
  }

  getAlbumByFilter() {
    this.filteredAlbums = this.albums.filter(album => album.title.toLowerCase().includes(this.inputValue.toLowerCase()));
  }

}

