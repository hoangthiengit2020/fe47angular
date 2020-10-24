import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movies';
import { MoviesService } from 'src/app/core/Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] | null = null;
  loading: boolean = false;
  error: string = '';
  constructor(private moviesService: MoviesService) {}
  // ngOnInit() tương đương ComponentDidMount bên react
  ngOnInit(): void {
    // this.loading = true;
    // this.moviesService.getMovieList().subscribe({
    //   next: (result) => {
    //     this.movieList = result;
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.loading = false;
    //     this.error = err.console.error;
    //   },
    //   complete: () => console.log('Get movie list success'),
    // });

    //Call API
    //dispatch react
    this.moviesService.getMovieList().subscribe();
    //subcribe data
    //mapstateToPorps react
    this.moviesService.movie.subscribe({
      next: (result: any) => {
        this.movieList = result.data;
        this.loading = result.loading;
        this.error = result.error;
      },
    });
  }
}
