import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Album} from "../album";
import {AlbumService} from "../album.service";
import {Photo} from "../../models/photo";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  albumId: number;
  album: Album;
  photos: Photo[];

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private location: Location) {
    this.albumId = +this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbum(this.albumId).subscribe((data: Album) => {
      this.album = data;
    });
    this.albumService.getPhotos(this.albumId).subscribe((data: Photo[]) => {
      this.photos = data;
    });
  }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }

}
