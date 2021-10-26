import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "./album";
import {Observable} from "rxjs";
import {Photo} from "../models/photo";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  urlApiAlbums: string = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) {
  }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.urlApiAlbums);
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`${this.urlApiAlbums}/${id}`)
  }

  getPhotos(id: number):Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.urlApiAlbums}/${(id)}/photos`);
  }

}
