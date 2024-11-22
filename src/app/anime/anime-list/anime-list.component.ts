import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
 
  



  
  constructor(private animeService: AnimeService) {
    
   }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
    this.promedio();

  } 
  promedio():number{
  let promedio = 0;
  let totalepisodios=0;
  let contador =0;
  for(let i =0; i< this.animes.length;i++){
    totalepisodios+= this.animes[i].episode;
    contador++;
  }if (contador === 0) {
    promedio = 0;
  } else {
    promedio = totalepisodios / contador;
  } return promedio;
}
getTotal():number{
  let contador =0;
  for(let i =0; i< this.animes.length;i++){
    
    contador++;
  }
  return contador;

}
  
  
}


