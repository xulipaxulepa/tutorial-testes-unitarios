import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPage } from './movie-details.page';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MovieDetailsPage', () => {
  let component: MovieDetailsPage;
  let fixture: ComponentFixture<MovieDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'ngOnInit')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Testa para ver se a variavel informatio está sendo setada inicialmente como null.
  it('should be null', () => {
    expect(component.information).toBeNull()
  })

  //Esse teste retorna como uma falha, sabe porque? é muito interessante!
  it('should call ngOnInit', () => {
    expect(component.ngOnInit).toHaveBeenCalled()
  })
});
