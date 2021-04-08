import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  //O tipo de resultado que quero(um observable)
  results: Observable<any>;
  //Os termos da busca
  searchTerm: string = '';
  //O tipo usando o enum criado.
  type: SearchType = SearchType.all;

  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  //Caso a busca altere
  searchChanged() {
    // Chama nossa função do service que retorna um Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

}
