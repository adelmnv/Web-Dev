import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Album } from './album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  url = 'https://my-json-server.typicode.com/adelmnv/db-lab6/albums';

  constructor(private http: HttpClient) {}

  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.url}/${id}`);
  }

  getPhotosByAlbumId(id: number): Observable<string[]> {
    return this.http
      .get<Album>(`${this.url}/${id}`)
      .pipe(map((album) => album.photoUrls || []));
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.url, album);
  }

  updateAlbum(album: Album, id: number): Observable<Album> {
    return this.http.put<Album>(`${this.url}/${id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
