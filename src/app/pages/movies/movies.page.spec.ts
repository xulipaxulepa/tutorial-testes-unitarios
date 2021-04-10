import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPage } from './movies.page';

import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MoviesPage', () => {
  let component: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'searchChanged')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //verifica se a variavel searchTerm foi definida.
  //No movies.page.ts ela é inicializada com aspas, logo ela está definida.
  it('searchTerm should be defined', () => {
    expect(component.searchTerm).toBeDefined();
  })

  //Este teste indica se o tipo possui um estado inicial.
  it('type should have an initial type', () => {
    expect(component.type).toEqual('')
  })

  //Este teste indica se a função searchChanged foi chamada com exito.
  it('searchChanged function should be called', () => {
    component.searchChanged()
    expect(component.searchChanged).toHaveBeenCalled();
  })
});
