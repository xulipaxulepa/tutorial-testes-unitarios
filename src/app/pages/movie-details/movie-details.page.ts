import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  //Construtor da nossa details page
  //@param activatedRoute informação sobre a rota que estamos
  //@param movieService o movie Service para pegar o dado
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    // Pega o ID que sera passado com a URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Pega a informação da API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  //Função para abrir o Website.
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
