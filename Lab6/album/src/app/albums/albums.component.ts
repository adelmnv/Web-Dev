import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albums: Album[] = [];
  loaded: boolean = false;

  isMenuVisible: boolean = false;
  newAlbumName: string = '';
  newAlbumDescription: string = '';
  newAlbumPhotos: number = 1;
  newAlbumPhotoUrls: string[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.loaded = false;
    this.albumsService.getAllAlbums().subscribe((data) => {
      this.albums = data;
      this.loaded = true;
    });
  }

  showMenu() {
    this.isMenuVisible = true;
  }

  closeMenu() {
    this.isMenuVisible = false;
    this.newAlbumName = '';
    this.newAlbumDescription = '';
    this.newAlbumPhotos = 1;
    this.newAlbumPhotoUrls = [];
  }

  createAlbum(event: Event) {
    console.log('creating');
    event.preventDefault();

    if (
      !this.newAlbumName.trim() ||
      !this.newAlbumDescription.trim() ||
      this.newAlbumPhotos <= 0
    ) {
      alert('Please fill all fields correctly.');
      return;
    }
    const newAlbum: Album = {
      id: this.albums.length + 1,
      title: this.newAlbumName,
      description: this.newAlbumDescription,
      photoUrls: this.newAlbumPhotoUrls.slice(0, this.newAlbumPhotos),
    };
    console.log(newAlbum);
    this.albumsService.createAlbum(newAlbum).subscribe(
      (album) => {
        this.albums.push(album);
        this.closeMenu();
      },
      (error) => {
        console.error('Error creating album:', error);
        alert('Failed to create album. Try again.');
      }
    );
  }

  removeAlbum(albumId: number) {
    this.albumsService.deleteAlbum(albumId).subscribe(
      () => {
        this.albums = this.albums.filter((album) => album.id !== albumId);
      },
      (error) => {
        console.warn('Failed to delete from server, removing locally:', error);
        this.albums = this.albums.filter((album) => album.id !== albumId);
      }
    );
  }
}
