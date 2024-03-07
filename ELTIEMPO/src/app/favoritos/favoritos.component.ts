import { Component, inject } from '@angular/core';
import { FavsService } from '../favs.service';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { PatronPipe } from '../patron.pipe';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [TarjetaComponent, PatronPipe],
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
