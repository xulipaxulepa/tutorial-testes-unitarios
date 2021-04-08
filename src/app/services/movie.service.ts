import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Enum Costumizado Typescript para tipos de busca
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //url da API
  url = 'http://www.omdbapi.com/';
  //Chave da API
  apiKey = '92ffdfc8'; // <-- Enter your own key here!

  //Construtor do Service com a injeção da dependencia
  //@param http o padrão Angular HttpClient para fazer os requests  
  constructor(private http: HttpClient) { }

  //Pega os dados do OmdbApi 
  //Mapeia os resultados para apenas o que queremos
  //@param {string} termo de busca do titulo
  //@param {SearchType} tipo filme, serie, episodio ou vazio
  //@returns Observable com os resultados
  searchData(title: string, type: SearchType): Observable<any> {
    //Pega a informação da API
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  //Pega a informação detalhada por uma ID usando o parametro "i"
  //@param {string} id imdbID para retornar a informação
  //@returns um Observable com informações detalhadas
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}