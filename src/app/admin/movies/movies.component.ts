import { Movie } from 'src/app/core/models/movies';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/Services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0;
  movieList: Movie[] | null;
  constructor(
    private movieServices: MoviesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}
  changePage(pageEvent): void {
    console.log(pageEvent);
    this.router.navigate([], {
      queryParams: { page: pageEvent.pageIndex + 1 },
    });
  }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe({
      next: (params) => {
        console.log(params);
        this.currentPage = parseInt(params.page) || 1;
        this.movieServices
          .getMovieListPaging(this.currentPage, this.pageSize)
          .subscribe({
            next: (result: any) => {
              this.movieList = result.items;
              this.totalCount = result.totalCount;
              console.log(this.movieList);
            },
          });
      },
    });
  }
}
