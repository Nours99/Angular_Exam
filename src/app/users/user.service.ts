import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {Album} from "../albums/album";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApiUsers: string  = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.urlApiUsers);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.urlApiUsers}/${id}`);
  }

  getAlbumsByUser(id: number): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.urlApiUsers}/${id}/albums`);
  }

}
