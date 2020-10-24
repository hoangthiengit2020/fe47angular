import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetaiComponent } from './movie-detai.component';

describe('MovieDetaiComponent', () => {
  let component: MovieDetaiComponent;
  let fixture: ComponentFixture<MovieDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
