import { Component, Input, inject } from '@angular/core';
import { FavsService } from '../favs.service';

@Component({
  selector: 'app-icono-fav',
  standalone: true,
  imports: [],
  templateUrl: './icono-fav.component.html',
  styleUrl: './icono-fav.component.css'
})
export class IconoFavComponent {
  @Input() cancion:any
  private favs=inject(FavsService)
  addFavs(){
    this.favs.addFav(this.cancion)
  }
  esFavs(){
    return this.favs.isAlreadyInFavs(this.cancion)
  }

}
