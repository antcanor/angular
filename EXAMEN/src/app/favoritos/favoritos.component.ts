import { Component, inject } from '@angular/core';
import { FavsService } from '../favs.service';
import { NombrePipePipe } from '../nombre-pipe.pipe';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [TarjetasComponent,NombrePipePipe],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  patron=""
  private favs=inject(FavsService)
  getFavs(){
    return this.favs.getFavs()
  }
  

}
