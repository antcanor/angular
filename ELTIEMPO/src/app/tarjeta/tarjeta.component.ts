import { Component, Input, inject } from '@angular/core';
import { CelsiusPipe } from '../celsius.pipe';
import { FavsService } from '../favs.service';
import { IconoFavComponent } from '../icono-fav/icono-fav.component';
import { IconoCasaComponent } from '../icono-casa/icono-casa.component';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CelsiusPipe,IconoFavComponent,IconoCasaComponent],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() ciudades:any
  private favs=inject(FavsService)

  addFavs(){
    this.favs.addFav(this.ciudades)
  }
}
