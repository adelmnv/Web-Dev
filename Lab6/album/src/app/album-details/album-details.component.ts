import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-details',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css',
})
export class AlbumDetailsComponent {
  album: Album | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  newAlbumName: string = '';

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(id).subscribe((album) => {
      this.album = album;
    });
  }

  updateAlbum(album: Album) {
    if (!album || !album.id) return;
    const updatedTitle = this.newAlbumName.trim();
    if (!updatedTitle) {
      alert('Title cannot be empty!');
      return;
    }

    album.title = this.newAlbumName;
    this.newAlbumName = '';
    alert('Album updated successfully!');

    //const updatedAlbum = { ...album, title: updatedTitle };

    // this.albumsService
    //   .updateAlbum(updatedAlbum, album.id)
    //   .subscribe((response) => {
    //     this.album.title = response.title;
    //     this.newAlbumName = response.title;
    //     alert('Album updated successfully!');
    //   });
  }
}
