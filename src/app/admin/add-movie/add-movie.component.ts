import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MoviesService } from 'src/app/core/Services/movies.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  imageReview: string | ArrayBuffer = '';
  constructor(private movieSevice: MoviesService) {
    this.form = new FormGroup({
      tenPhim: new FormControl(''),
      biDanh: new FormControl(''),
      trailer: new FormControl(''),
      hinhAnh: new FormControl(''),
      moTa: new FormControl(''),
      ngayKhoiChieu: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  handleAddMovie() {
    console.log(this.form.value);
    this.movieSevice.addMovie(this.form.value).subscribe();
  }
  handleChangeFile(event) {
    // console.log(event.target.value);
    // console.log(event.target.files);
    const file = event.target.files[0];
    if (!file) return;
    this.form.patchValue({ hinhAnh: file });
    //Biến đối tượng files thành base64 => có thể gắn vào tag image
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onloadend = (e) => {
      // console.log(e.target.result);
      this.imageReview = e.target.result;
    };
  }
}
