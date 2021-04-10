import { TestBed } from '@angular/core/testing';

import { MovieService, SearchType } from './movie.service';

import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MovieService', () => {
  const DadoMockado: any = require('../services/searchData.mock.json')

  let DadosTeste
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  //testando a API utilizando dados mockados.
  it('test service searchData', () => {
    const service: MovieService = TestBed.get(MovieService);
    spyOn(service, 'searchData').and.callFake(() => {
      DadosTeste = DadoMockado
    })
    service.searchData('Godzilla',SearchType.all)
    expect(service.searchData).toHaveBeenCalled()
    expect(DadosTeste).toEqual(DadoMockado)
  })

});
