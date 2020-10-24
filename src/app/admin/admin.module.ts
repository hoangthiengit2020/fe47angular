import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { MaterialModule } from '../Shared/material/material.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutadminComponent,
    children: [
      //pathMatch giống exact trong reactjs
      { path: '', pathMatch: 'full', redirectTo: 'user' },
      { path: 'user', component: UsersComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'addmovie', component: AddMovieComponent },
    ],
  },
];

@NgModule({
  declarations: [
    UsersComponent,
    MoviesComponent,
    LayoutadminComponent,
    AddMovieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
