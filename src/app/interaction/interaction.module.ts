import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetaiComponent } from './movie-detai/movie-detai.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [InteractionComponent, MovieItemComponent, MovieListComponent, MovieDetaiComponent, AddMovieComponent],
  imports: [CommonModule],
  exports: [InteractionComponent],
})
export class InteractionModule {}
