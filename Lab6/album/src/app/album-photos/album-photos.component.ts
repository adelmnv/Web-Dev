import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  photos: string[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotosByAlbumId(id).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
