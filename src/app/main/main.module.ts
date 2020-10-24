import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NewComponent } from './new/new.component';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../Shared/material/material.module';
import { PipeModule } from '../Shared/pipe/pipe.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //Khi dùng children, thì file html layout phải gắn outlet
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:maphim', component: MovieDetailComponent },
      { path: 'new', component: NewComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent,
    NewComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PipeModule,
  ],
})
export class MainModule {}
