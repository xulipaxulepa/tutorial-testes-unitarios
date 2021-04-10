import { TestBed } from '@angular/core/testing';

import { MovieService, SearchType } from './movie.service';

import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MovieService', () => {
  const DadoMockado: JSON = require('../services/searchData.mock.json')
  const getDetailsMockado: JSON = require('../services/getDetails.mock.json')

  let DadosTesteSearchData
  let DadosTesteGetDetails
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
      DadosTesteSearchData = DadoMockado
    })
    service.searchData('Godzilla',SearchType.all)
    expect(service.searchData).toHaveBeenCalled()
    expect(DadosTesteSearchData).toEqual(DadoMockado)
  })

  //testando a API utilizando dados mockados.
  it('test service getDetails', () => {
    const service: MovieService = TestBed.get(MovieService);
    spyOn(service, 'searchData').and.callFake(() => {
      DadosTesteGetDetails = getDetailsMockado
    })
    service.searchData('Godzilla',SearchType.all)
    expect(service.searchData).toHaveBeenCalled()
    expect(DadosTesteGetDetails).toEqual(getDetailsMockado)
  })

});
