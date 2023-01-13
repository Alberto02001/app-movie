import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreTvComponent } from './genre-tv.component';

describe('GenreTvComponent', () => {
  let component: GenreTvComponent;
  let fixture: ComponentFixture<GenreTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
